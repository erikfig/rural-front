import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supplierSchema, type SupplierFormData } from './validation';
import type { Supplier } from '@/hooks/use-suppliers';
import Button from '@/components/ui/button/button';
import { InputController } from '@/components/ui/form/input-controller';
import { ComponentOverlay, ComponentForm, ComponentTitle, ComponentBtnGroup, ComponentRow } from './styles';
import { useEffect } from 'react';
import { states } from '@/lib/utils/states';

interface SupplierFormProps {
  supplier: Supplier | Omit<Supplier, 'id'>;
  onClose: () => void;
  onSave: (data: Omit<Supplier, 'id'>) => void;
}

const SupplierForm = ({ supplier, onClose, onSave }: SupplierFormProps) => {
  const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm<SupplierFormData>({
    defaultValues: supplier as SupplierFormData,
    resolver: zodResolver(supplierSchema),
  });

  const arableArea = watch('arable_area');
  const vegetationArea = watch('vegetation_area');

  // Atualiza o valor de total_farm_area dinamicamente
  useEffect(() => {
    setValue('total_farm_area', (+arableArea || 0) + (+vegetationArea || 0));
  }, [arableArea, vegetationArea, setValue]);

  const onSubmit = async (data: SupplierFormData) => {
    const updatedData = {
      ...data,
      total_farm_area: (data.arable_area || 0) + (data.vegetation_area || 0),
    };
    try {
      await onSave(updatedData as Omit<Supplier, 'id'>);
    } catch (error) {
      console.error('Erro ao salvar fornecedor:', error);
    }
  };

  return (
    <ComponentOverlay>
      <ComponentForm
        onSubmit={handleSubmit(onSubmit)}
      >
        <ComponentTitle>{
          ('id' in supplier && supplier.id) ? 'Editar Fornecedor' : 'Adicionar Fornecedor'
        }</ComponentTitle>

        <InputController
          name="cpf_cnpj"
          control={control}
          label="CPF ou CNPJ"
          placeholder="CPF/CNPJ"
          type="text"
          errors={errors}
        />

        <InputController
          name="producer_name"
          control={control}
          label="Nome do produtor"
          placeholder="Nome do Produtor"
          type="text"
          errors={ errors }
        />

        <InputController
          name="farm_name"
          control={control}
          label="Nome da fazenda (propriedade)"
          placeholder="Nome da Fazenda"
          type="text"
          errors={ errors }
        />

        <ComponentRow>
          <InputController
            name="city"
            control={control}
            label="Cidade"
            placeholder="Cidade"
            type="text"
            errors={ errors }
          />

          <InputController
            name="state"
            control={control}
            label="Estado"
            placeholder="Estado"
            type="select"
            options={states}
            errors={ errors }
          />
        </ComponentRow>

        <ComponentRow>
          <InputController
            name="total_farm_area"
            control={control}
            label="Área total da fazenda (em hectares)"
            placeholder="Área Total da Fazenda"
            type="number"
            disabled
            errors={ errors }
          />

          <InputController
            name="arable_area"
            control={control}
            label="Área agricultável (em hectares)"
            placeholder="Área Cultivável"
            type="number"
            errors={ errors }
          />

          <InputController
            name="vegetation_area"
            control={control}
            label="Área de vegetação (em hectares)"
            placeholder="Área de Vegetação"
            type="number"
            errors={ errors }
          />
        </ComponentRow>

        <InputController
          name="harvests"
          control={control}
          label="Safras (ex: Safra 2021, Safra 2022)"
          type="textarea"
          placeholder="Safras (separadas por vírgula)"
          errors={ errors }
        />

        <InputController
          name="crops"
          control={control}
          label="Culturas plantadas (ex.: Soja na Safra 2021, Milho na Safra 2021, Café na Safra 2022)"
          type="textarea"
          placeholder="Culturas (separadas por vírgula)"
          errors={ errors }
        />

        <ComponentBtnGroup>
          <Button
            color="gray"
            onClick={onClose}
            title="Cancelar"
          >
            Cancelar
          </Button>
          <Button
            color="blue"
            type="submit"
            title="Salvar"
          >
            Salvar
          </Button>
        </ComponentBtnGroup>
      </ComponentForm>
    </ComponentOverlay>
  );
};

export default SupplierForm;

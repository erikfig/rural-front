import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supplierSchema } from './validation';
import type { z } from 'zod';
import type { Supplier } from '@/hooks/use-suppliers';
import Button from '@/components/ui/button';
import { InputController } from '@/components/ui/form/input-controller';

interface SupplierFormProps {
  supplier: Supplier | Omit<Supplier, 'id'>;
  onClose: () => void;
  onSave: (data: Omit<Supplier, 'id'>) => void;
}

type SupplierFormData = z.infer<typeof supplierSchema>;

const SupplierForm = ({ supplier, onClose, onSave }: SupplierFormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm<SupplierFormData>({
    defaultValues: supplier,
    resolver: zodResolver(supplierSchema),
  });

  const onSubmit = (data: SupplierFormData) => {
    onSave(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <form
        className="flex flex-col w-screen h-screen max-w-2xl gap-4 p-4 overflow-auto bg-white rounded shadow-md max-h-9/10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-xl font-bold">{
          'id' in supplier ? 'Editar Fornecedor' : 'Adicionar Fornecedor'
        }</h3>

        <InputController
          name="cpf_cnpj"
          control={control}
          label="CPF ou CNPJ"
          placeholder="CPF/CNPJ"
          type="text"
          errors={ errors }
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
          type="text"
          errors={ errors }
        />

        <InputController
          name="total_farm_area"
          control={control}
          label="Área total da fazenda (em hectares)"
          placeholder="Área Total da Fazenda"
          type="number"
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

        <div className="flex justify-end gap-2">
          <Button
            color="gray"
            onClick={onClose}
            title="Cancelar"
          >
            Cancelar
          </Button>
          <button
            type="submit"
            className="flex items-center gap-1 px-2 py-1 text-white bg-blue-500 rounded cursor-pointer"
            title="Salvar"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;

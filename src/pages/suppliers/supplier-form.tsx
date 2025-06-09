import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supplierSchema, type SupplierFormData } from './validations/validation';
import type { Supplier } from '@/hooks/use-suppliers';
import { useCallback, useEffect } from 'react';
import SupplierFormComponent from './components/supplier-form-component'

interface SupplierFormProps {
  supplier: Supplier | Omit<Supplier, 'id'>;
  onClose: () => void;
  onSave: (data: Omit<Supplier, 'id'>) => void;
}

const SupplierForm = ({ supplier, onClose, onSave }: SupplierFormProps) => {
  const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    defaultValues: supplier as Omit<Supplier, 'id'>,
    resolver: zodResolver(supplierSchema) as any,
  });

  const arableArea = watch('arable_area');
  const vegetationArea = watch('vegetation_area');

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

  const submit = useCallback(() => handleSubmit(onSubmit), [handleSubmit]);

  const props = {
    supplier,
    onClose,
    submit,
    control,
    errors,
  };

  return <SupplierFormComponent {...props} />
};

export default SupplierForm;

import { useGetSuppliers, useCreateSupplier, useUpdateSupplier, useDeleteSupplier, type Supplier } from '@/hooks/use-suppliers';
import { useState } from 'react';
import SupplierForm from './suppliers/supplier-form';
import SupplierList from './suppliers/supplier-list';
import Button from '@/components/ui/button';

export const Suppliers = () => {
  const { data: suppliers, isLoading, isError } = useGetSuppliers();
  const createSupplier = useCreateSupplier();
  const updateSupplier = useUpdateSupplier();
  const deleteSupplier = useDeleteSupplier();

  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);

  const handleAddSupplier = () => {
    setEditingSupplier({
      id: '',
      cpf_cnpj: '',
      producer_name: '',
      farm_name: '',
      city: '',
      state: '',
      total_farm_area: 0,
      arable_area: 0,
      vegetation_area: 0,
      harvests: [],
      crops: [],
    });
  };

  const handleSaveSupplier = (data: Omit<Supplier, 'id'>) => {
    if (editingSupplier?.id) {
      updateSupplier.mutate({ id: editingSupplier.id, updatedSupplier: data });
    } else {
      createSupplier.mutate(data);
    }
    setEditingSupplier(null);
  };

  if (isLoading) return <p>Carregando fornecedores...</p>;
  if (isError) return <p>Erro ao carregar fornecedores.</p>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">
          Fornecedores
        </h2>

        <Button
          color="blue"
          onClick={handleAddSupplier}
          title="Adicionar fornecedor"
        >
          + Novo
        </Button>
      </div>

      <p className="text-gray-600">Gerencie seus fornecedores aqui.</p>

      <SupplierList
        suppliers={suppliers || []}
        onEdit={(supplier) => setEditingSupplier(supplier)}
        onDelete={(id) => deleteSupplier.mutate(id)}
      />

      {editingSupplier && (
        <SupplierForm
          supplier={editingSupplier || {
            cpf_cnpj: '',
            producer_name: '',
            farm_name: '',
            city: '',
            state: '',
            total_farm_area: 0,
            arable_area: 0,
            vegetation_area: 0,
            harvests: [],
            crops: [],
          }}
          onClose={() => setEditingSupplier(null)}
          onSave={handleSaveSupplier}
        />
      )}
    </div>
  );
};

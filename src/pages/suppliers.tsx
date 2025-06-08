import { useGetSuppliers, useCreateSupplier, useUpdateSupplier, useDeleteSupplier, type Supplier } from '@/hooks/use-suppliers';
import { useState } from 'react';
import SupplierForm from './suppliers/supplier-form';
import SupplierList from './suppliers/supplier-list';
import Button from '@/components/ui/button/button';
import { ComponentSuppliersContainer, ComponentSuppliersHeader, ComponentSuppliersDescription } from './suppliers/styles';
import SupplierChart from './suppliers/supplier-chart';

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
    <ComponentSuppliersContainer>
      <ComponentSuppliersHeader>
        <h2>
          Fornecedores
        </h2>

        <Button
          color="blue"
          onClick={handleAddSupplier}
          title="Adicionar fornecedor"
        >
          + Novo
        </Button>
      </ComponentSuppliersHeader>

      <ComponentSuppliersDescription>Gerencie seus fornecedores aqui.</ComponentSuppliersDescription>

      <SupplierChart suppliers={suppliers || []} />

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
    </ComponentSuppliersContainer>
  );
};

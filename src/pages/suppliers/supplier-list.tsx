import type { Supplier } from '@/hooks/use-suppliers';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Pagination from '@/components/ui/pagination/pagination';
import Button from '@/components/ui/button';
import { usePagination } from '@/components/ui/pagination/usePagination';
import { Card, CardContent } from '@/components/ui/card';

interface SupplierListProps {
  suppliers: Supplier[];
  onEdit: (supplier: Supplier) => void;
  onDelete: (id: string) => void;
}

const SupplierList = ({ suppliers, onEdit, onDelete }: SupplierListProps) => {
  const { currentPage, setCurrentPage, totalPages, paginatedItems } = usePagination<Supplier>(suppliers, 15);

  return (
    <>
      {paginatedItems.map((supplier) => (
        <Card className='transition-shadow duration-200 hover:shadow-lg hover:bg-gray-200' key={supplier.id}>
          <CardContent>
            <div className="flex flex-row justify-between gap-2">
              <p>{supplier.farm_name}</p>
              <div className="flex flex-row justify-between gap-2">
                <Button
                  color="yellow"
                  onClick={() => onEdit(supplier)}
                  title="Editar fornecedor"
                >
                  <FaEdit />
                </Button>
                <Button
                  color="red"
                  onClick={() => {
                    if (confirm('Tem certeza que deseja excluir este fornecedor?')) {
                      onDelete(supplier.id);
                    }
                  }}
                  title="Excluir fornecedor"
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default SupplierList;

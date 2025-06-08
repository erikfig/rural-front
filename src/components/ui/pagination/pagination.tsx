import Button from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <Button
        color="gray"
        onClick={handlePrevious}
        title="Página anterior"
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <span className="px-4 py-2">{currentPage} de {totalPages}</span>
      <Button
        color="gray"
        onClick={handleNext}
        title="Próxima página"
        disabled={currentPage === totalPages}
      >
        Próximo
      </Button>
    </div>
  );
};

export default Pagination;

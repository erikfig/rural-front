import Button from '@/components/ui/button/button';
import { ComponentPaginationContainer, ComponentPaginationText } from './styles';

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
    <ComponentPaginationContainer>
      <Button
        color="gray"
        onClick={handlePrevious}
        title="Página anterior"
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <ComponentPaginationText>{currentPage} de {totalPages}</ComponentPaginationText>
      <Button
        color="gray"
        onClick={handleNext}
        title="Próxima página"
        disabled={currentPage === totalPages}
      >
        Próximo
      </Button>
    </ComponentPaginationContainer>
  );
};

export default Pagination;

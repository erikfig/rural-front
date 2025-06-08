import { Card } from '@/components/ui/card/card';
import type { Supplier } from '@/hooks/use-suppliers';
import { useEffect, useState } from 'react';
import { ComponentRow, ComponentIcon } from './styles';
import { FaTractor, FaWarehouse } from 'react-icons/fa';
import { formatNumber } from '@/lib/utils/format-number';

interface SupplierListProps {
  suppliers: Supplier[];
}

const SupplierChart = ({ suppliers }: SupplierListProps) => {
  const [totalHectares, setTotalHectares] = useState(0);

  useEffect(() => {
    setTotalHectares(
      suppliers.reduce((total, supplier) => total + supplier.total_farm_area, 0)
    );
  }, [suppliers]);

  return (
    <ComponentRow>
      <Card variant="primary">
        <ComponentRow>
          <div>
            <p>Total de Fazendas:</p>
            <h2>{formatNumber(suppliers.length)}</h2>
          </div>
          <div className="helper-container">
            <ComponentIcon>
              <FaWarehouse />
            </ComponentIcon>
          </div>
        </ComponentRow>
      </Card>

      <Card variant="secondary">
        <ComponentRow>
          <div>
            <p>Total de Hectares: </p>
            <h2>{formatNumber(totalHectares)}</h2>
          </div>
          <div className="helper-container">
            <ComponentIcon>
              <FaTractor />
            </ComponentIcon>
          </div>
        </ComponentRow>
      </Card>
    </ComponentRow>
  );
};

export default SupplierChart;
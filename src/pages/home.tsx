import { AreaChart, BarChart, LineChart, PieChart } from "@/components/charts"
import { Card, CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card/card-header"
import { ComponentHomeContainer, ComponentHomeTitle, ComponentHomeGrid } from './home/styles';
import { useEffect, useState } from "react";
import { useGetSuppliers } from "@/hooks/use-suppliers";
import { FaInfoCircle } from 'react-icons/fa';

interface PieChartData {
  name: string;
  value: number;
}

export const HomePage = () => {
  const { data: suppliers } = useGetSuppliers();
  const [stateDistribution, setStateDistribution] = useState<PieChartData[]>([]);
  const [cropDistribution, setCropDistribution] = useState<PieChartData[]>([]);
  const [landUseDistribution, setLandUsedDistribution] = useState<PieChartData[]>([]);

  useEffect(() => {
    if (!suppliers) return;

    const stateDistributionLocal: Record<string, number> = suppliers.reduce((acc: Record<string, number>, supplier) => {
      acc[supplier.state] = (acc[supplier.state] || 0) + 1;
      return acc;
    }, {});

    const cropDistributionLocal: Record<string, number> = suppliers.reduce((acc: Record<string, number>, supplier) => {
      (supplier.crops as string[]).forEach((crop) => {
        acc[crop] = (acc[crop] || 0) + 1;
      });
      return acc;
    }, {});

    const landUseDistributionLocal: Record<string, number> = suppliers.reduce(
      (acc: Record<string, number>, supplier) => {
        acc['Arável'] += supplier.arable_area;
        acc['Vegetação'] += supplier.vegetation_area;
        return acc;
      },
      { Arável: 0, Vegetação: 0 }
    );

    setStateDistribution(Object.entries(stateDistributionLocal).map(([key, value]) => ({
      name: `Estado: ${key}`,
      value,
    })));

    setCropDistribution(Object.entries(cropDistributionLocal).map(([key, value]) => ({
      name: `Cultura: ${key}`,
      value,
    })));

    setLandUsedDistribution(Object.entries(landUseDistributionLocal).map(([key, value]) => ({
      name: `Uso do Solo: ${key}`,
      value,
    })));
  }, [suppliers]);

  return (
    <ComponentHomeContainer>
      <ComponentHomeTitle>
        Bem vindo ao Painel de Controle
      </ComponentHomeTitle>

      <ComponentHomeGrid className="lg-grid-cols-3">
        <Card>
          <CardHeader>Distribuição por estado</CardHeader>
          <CardContent>
            <PieChart name="Distribuição por estado" data={stateDistribution} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Distribuição por cultura plantada</CardHeader>
          <CardContent>
            <PieChart name="Distribuição por cultura plantada" data={cropDistribution} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Distribuição por uso do solo</CardHeader>
          <CardContent>
            <PieChart name="Distribuição por uso do solo" data={landUseDistribution} />
          </CardContent>
        </Card>
      </ComponentHomeGrid>

      <ComponentHomeGrid className="lg-grid-cols-1">
        <Card variant="secondary">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaInfoCircle size={20} />
            Os gráficos abaixo não buscam dados reais, são apenas exemplos de como os gráficos podem ser exibidos.
          </div>
        </Card>
      </ComponentHomeGrid>

      <ComponentHomeGrid className="lg-grid-cols-1">
        <Card>
          <CardHeader>Vendas por mês</CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </ComponentHomeGrid>

      <ComponentHomeGrid className="lg-grid-cols-2">
        <Card>
          <CardHeader>Evolução de acessos ao site</CardHeader>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Volume de vendas acumulado</CardHeader>
          <CardContent>
            <AreaChart />
          </CardContent>
        </Card>
      </ComponentHomeGrid>
    </ComponentHomeContainer>
  )
}
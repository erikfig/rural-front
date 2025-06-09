import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AreaChart, BarChart, LineChart, PieChart } from "@/components/charts";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card/card-header";
import { ComponentHomeContainer, ComponentHomeTitle, ComponentHomeGrid } from './home/styles';
import { useEffect, useState } from "react";
import { useGetSuppliers } from "@/hooks/use-suppliers";
import { FaInfoCircle } from 'react-icons/fa';
export const HomePage = () => {
    const { data: suppliers } = useGetSuppliers();
    const [stateDistribution, setStateDistribution] = useState([]);
    const [cropDistribution, setCropDistribution] = useState([]);
    const [landUseDistribution, setLandUsedDistribution] = useState([]);
    useEffect(() => {
        if (!suppliers)
            return;
        const stateDistributionLocal = suppliers.reduce((acc, supplier) => {
            acc[supplier.state] = (acc[supplier.state] || 0) + 1;
            return acc;
        }, {});
        const cropDistributionLocal = suppliers.reduce((acc, supplier) => {
            supplier.crops.forEach((crop) => {
                acc[crop] = (acc[crop] || 0) + 1;
            });
            return acc;
        }, {});
        const landUseDistributionLocal = suppliers.reduce((acc, supplier) => {
            acc['Arável'] += supplier.arable_area;
            acc['Vegetação'] += supplier.vegetation_area;
            return acc;
        }, { Arável: 0, Vegetação: 0 });
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
    return (_jsxs(ComponentHomeContainer, { children: [_jsx(ComponentHomeTitle, { children: "Bem vindo ao Painel de Controle" }), _jsxs(ComponentHomeGrid, { className: "lg-grid-cols-3", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: "Distribui\u00E7\u00E3o por estado" }), _jsx(CardContent, { children: _jsx(PieChart, { name: "Distribui\u00E7\u00E3o por estado", data: stateDistribution }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: "Distribui\u00E7\u00E3o por cultura plantada" }), _jsx(CardContent, { children: _jsx(PieChart, { name: "Distribui\u00E7\u00E3o por cultura plantada", data: cropDistribution }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: "Distribui\u00E7\u00E3o por uso do solo" }), _jsx(CardContent, { children: _jsx(PieChart, { name: "Distribui\u00E7\u00E3o por uso do solo", data: landUseDistribution }) })] })] }), _jsx(ComponentHomeGrid, { className: "lg-grid-cols-1", children: _jsx(Card, { variant: "secondary", children: _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx(FaInfoCircle, { size: 20 }), "Os gr\u00E1ficos abaixo n\u00E3o buscam dados reais, s\u00E3o apenas exemplos de como os gr\u00E1ficos podem ser exibidos."] }) }) }), _jsx(ComponentHomeGrid, { className: "lg-grid-cols-1", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: "Vendas por m\u00EAs" }), _jsx(CardContent, { children: _jsx(BarChart, {}) })] }) }), _jsxs(ComponentHomeGrid, { className: "lg-grid-cols-2", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: "Evolu\u00E7\u00E3o de acessos ao site" }), _jsx(CardContent, { children: _jsx(LineChart, {}) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: "Volume de vendas acumulado" }), _jsx(CardContent, { children: _jsx(AreaChart, {}) })] })] })] }));
};

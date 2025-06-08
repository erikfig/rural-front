export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    maximumFractionDigits: 2,
  }).format(value);
};
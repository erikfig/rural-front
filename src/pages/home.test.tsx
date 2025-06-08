import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HomePage } from './home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@/theme';

jest.mock('@/components/charts', () => ({
  PieChart: () => <div>PieChart Mock</div>,
  BarChart: () => <div>BarChart Mock</div>,
  LineChart: () => <div>LineChart Mock</div>,
  AreaChart: () => <div>AreaChart Mock</div>,
}));

jest.mock('@/hooks/use-suppliers', () => {
  let data: Array<{ state: string; crops: string[]; arable_area: number; vegetation_area: number }> | undefined = undefined;
  return {
    useGetSuppliers: () => ({
      data,
      isLoading: !data,
      isSuccess: !!data,
    }),
    __setData: (newData: Array<{ state: string; crops: string[]; arable_area: number; vegetation_area: number }> | undefined) => {
      data = newData;
    },
  };
});

describe('Home Page', () => {
  it('renders without crashing', () => {
    const queryClient = new QueryClient();

    const { container } = render(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <HomePage />
        </QueryClientProvider>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });
});

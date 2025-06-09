import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suppliers } from './suppliers';

jest.mock("@/config", () => ({ API_BASE_URL: "http://localhost:3000" }));

describe('Suppliers Page', () => {
  const queryClient = new QueryClient();

  it('renders without crashing', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Suppliers />
      </QueryClientProvider>
    );
    expect(container).toHaveTextContent('Carregando fornecedores...');
  });
});

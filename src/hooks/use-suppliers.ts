import { API_BASE_URL } from '@/config'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export interface Supplier {
  id: string;
  cpf_cnpj: string;
  producer_name: string;
  farm_name: string;
  city: string;
  state: string;
  total_farm_area: number;
  arable_area: number;
  vegetation_area: number;
  harvests: string[];
  crops: string[];
}

// Obter fornecedores
export const useGetSuppliers = () => {
  return useQuery<Supplier[], Error>({
    queryKey: ['suppliers'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_BASE_URL}/rural-producers`);
      return data;
    },
  });
};

// Criar fornecedor
export const useCreateSupplier = () => {
  const queryClient = useQueryClient();
  return useMutation<Supplier, Error, Omit<Supplier, 'id'>>({
    mutationFn: async (newSupplier) => {
      const { data } = await axios.post(`${API_BASE_URL}/rural-producers`, newSupplier);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
    },
  });
};

// Atualizar fornecedor
export const useUpdateSupplier = () => {
  const queryClient = useQueryClient();
  return useMutation<Supplier, Error, { id: string; updatedSupplier: Partial<Supplier> }>({
    mutationFn: async ({ id, updatedSupplier }) => {
      const { data } = await axios.put(`${API_BASE_URL}/rural-producers/${id}`, updatedSupplier);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
    },
  });
};

// Excluir fornecedor
export const useDeleteSupplier = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await axios.delete(`${API_BASE_URL}/rural-producers/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
    },
  });
};

import { CpfCnpjSchema } from '@/lib/validations/cpfCnpj.validation';
import { z } from 'zod';

export const supplierSchema = z.object({
  cpf_cnpj: CpfCnpjSchema,
  producer_name: z.string().min(3, 'Nome do produtor deve ter no mínimo 3 caracteres'),
  farm_name: z.string().min(3, 'Nome da fazenda deve ter no mínimo 3 caracteres'),
  city: z.string().min(2, 'Cidade deve ter no mínimo 2 caracteres'),
  state: z.string().min(2, 'Estado deve ter no mínimo 2 caracteres'),
  total_farm_area: z.number().positive('Área total deve ser um número positivo'),
  arable_area: z.number().positive('Área agricultável deve ser um número positivo'),
  vegetation_area: z.number().positive('Área de vegetação deve ser um número positivo'),
  harvests: z.array(z.string()).nonempty('Deve haver pelo menos uma safra'),
  crops: z.array(z.string()).nonempty('Deve haver pelo menos uma cultura plantada'),
});
import { CpfCnpjSchema } from '@/lib/validations/cpf-cnpj.validation';
import { z } from 'zod';

export const supplierSchema = z
  .object({
    cpf_cnpj: CpfCnpjSchema,
    producer_name: z.string().min(3, 'Nome do produtor deve ter no mínimo 3 caracteres'),
    farm_name: z.string().min(3, 'Nome da fazenda deve ter no mínimo 3 caracteres'),
    city: z.string().min(2, 'Cidade deve ter no mínimo 2 caracteres'),
    state: z.string().min(2, 'Estado deve ter no mínimo 2 caracteres'),
    total_farm_area: z
      .coerce
      .number()
      .refine((val) => !isNaN(val) && val > 0, 'Área total deve ser um número positivo'),
    arable_area: z
      .coerce
      .number()
      .refine((val) => !isNaN(val) && val > 0, 'Área agricultável deve ser um número positivo'),
    vegetation_area: z
      .coerce
      .number()
      .refine((val) => !isNaN(val) && val > 0, 'Área de vegetação deve ser um número positivo'),
    harvests: z
      .union([
        z.string().transform((val) => val.split(',').map((item) => item.trim())),
        z.array(z.string())
      ])
      .refine((arr) => arr.length > 0, 'Deve haver pelo menos uma safra'),
    crops: z
      .union([
        z.string().transform((val) => val.split(',').map((item) => item.trim())),
        z.array(z.string())
      ])
      .refine((arr) => arr.length > 0, 'Deve haver pelo menos uma cultura plantada'),
  })
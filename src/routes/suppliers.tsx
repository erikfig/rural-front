import { Suppliers } from '@/pages/suppliers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/suppliers')({
  component: Suppliers,
})

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: Component,
})

function Component() {
  return (
    <div className="p-2">
      <h3>Welcome Settings!</h3>
    </div>
  )
}
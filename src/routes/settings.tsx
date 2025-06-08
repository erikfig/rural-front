import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: Component,
})

function Component() {
  return (
    <div>
      <h3>Welcome Settings!</h3>
    </div>
  )
}
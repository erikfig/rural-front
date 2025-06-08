import { Dashboard } from '@/layouts/default'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Dashboard>
        <Outlet />
        <TanStackRouterDevtools position="top-right" />
      </Dashboard>
    </>
  ),
})
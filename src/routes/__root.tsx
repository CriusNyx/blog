import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row justify-center p2">
        <Link to="/" className="[&.active]:font-bold">
          <h1 className="mb-0!">RJ's Blog</h1>
        </Link>
      </div>
      <div className="flex flex-col items-center grow">
        <div className="flex flex-col w-250 max-w-[95vw] my-5 p-5 bg-black/50 grow rounded-xl">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});

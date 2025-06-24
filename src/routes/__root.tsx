import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row justify-center p2">
        <div className="w-250 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center grow">
        <div className="flex flex-col my-5 p-5 w-250 bg-[#00000050] grow rounded-xl">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});

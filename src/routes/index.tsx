import { createFileRoute } from "@tanstack/react-router";
import { Home } from "./-home/index.tsx";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Home />;
}

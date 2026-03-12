import { createFileRoute } from "@tanstack/react-router";
import Architecture from "./-architecture.mdx";

export const Route = createFileRoute("/blog/architecture/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Architecture />;
}

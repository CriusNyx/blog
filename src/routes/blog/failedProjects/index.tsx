import { createFileRoute } from "@tanstack/react-router";
import FailedProjects from "./-failedProjects.mdx";

export const Route = createFileRoute("/blog/failedProjects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FailedProjects />;
}

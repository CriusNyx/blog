import { createFileRoute } from "@tanstack/react-router";
import DoingCoolThingsWithMarkdown from "./-DoingCoolThingsWithMarkdown.mdx";

export const Route = createFileRoute("/blog/doingCoolThingsWithMarkdown/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DoingCoolThingsWithMarkdown />;
}

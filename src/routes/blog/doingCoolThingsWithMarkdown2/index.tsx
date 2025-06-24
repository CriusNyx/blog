import { createFileRoute } from "@tanstack/react-router";
import DoingCoolThingsWithMarkdown2 from "./-DoingCoolThingsWithMarkdown2.mdx";

export const Route = createFileRoute("/blog/doingCoolThingsWithMarkdown2/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DoingCoolThingsWithMarkdown2 />;
}

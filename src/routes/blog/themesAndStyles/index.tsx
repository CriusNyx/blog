import { createFileRoute } from "@tanstack/react-router";
import Blog from "./-Blog.mdx";

export const Route = createFileRoute("/blog/themesAndStyles/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Blog />;
}

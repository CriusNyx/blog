import { createFileRoute } from "@tanstack/react-router";
import Jeremy from "./jeremy.mdx";
import "./jeremy.css";

export const Route = createFileRoute("/blog/jeremy/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col jeremy">
      <Jeremy />
    </div>
  );
}

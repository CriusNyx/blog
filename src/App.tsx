import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { MDXProvider } from "@mdx-js/react";
import "./prism.css";
import { MDXComponents } from "./MDXComponents/index.tsx";
import { createHashHistory } from "@tanstack/react-router";

const memoryHistory = createHashHistory();

const router = createRouter({ routeTree, history: memoryHistory });

function App() {
  return (
    <MDXProvider components={MDXComponents}>
      <RouterProvider router={router} />
    </MDXProvider>
  );
}

export default App;

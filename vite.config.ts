import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import rehypePrism from "rehype-prism-plus";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      addExtensions: true,
    }),
    react(),
    mdx({
      providerImportSource: "@mdx-js/react",
      rehypePlugins: [rehypePrism],
    }),
    tailwindcss(),
  ],
});

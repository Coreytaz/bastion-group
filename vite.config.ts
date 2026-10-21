import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this app under /bastion-group/ in production.
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: "github-pages-spa-fallback",
      closeBundle() {
        const page = resolve("dist/index.html");
        if (existsSync(page)) copyFileSync(page, resolve("dist/404.html"));
      },
    },
  ],
  base: command === "serve" ? "/" : "/bastion-group/",
  build: { outDir: "dist" },
}));

import { defineConfig } from "vite";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    {
      name: "copy-root-manual-pdf",
      closeBundle() {
        const source = resolve(__dirname, "Labmanual.pdf");
        const destination = resolve(__dirname, "dist", "Labmanual.pdf");
        if (existsSync(source)) {
          copyFileSync(source, destination);
        } else {
          console.warn("Labmanual.pdf was not found in the project root.");
        }
      }
    }
  ]
});

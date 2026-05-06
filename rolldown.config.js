import { defineConfig } from "rolldown";
export default defineConfig({
  input: "./index.ts",
  output: { format: "cjs", dir: "dist" },
});

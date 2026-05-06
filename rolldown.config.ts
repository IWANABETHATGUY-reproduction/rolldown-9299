import { defineConfig } from "rolldown";
export default defineConfig({
  input: { index: "./index.ts", v4: "./v4.ts" },
  output: { format: "cjs", dir: "dist", entryFileNames: "[name].cjs" },
  unbundle: true,
});

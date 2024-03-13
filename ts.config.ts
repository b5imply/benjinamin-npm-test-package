import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["./src/index.ts"],
});

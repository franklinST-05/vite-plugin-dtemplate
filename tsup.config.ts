import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: ["src/index.ts"],
    format: "cjs",
    splitting: false,
    clean: true,
    dts: true,
    external: ["vite"],
    minify: true,
});

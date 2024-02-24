import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: ["src/index.ts", "src/utils"],
    format: ["cjs"],
    splitting: false,
    clean: true,
    dts: true,
    minify: true,
    external: ["vite"],
});

import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: ["src/index.ts", "src/utils/index.ts"],
    format: ["cjs"],
    splitting: false,
    clean: true,
    dts: true,
    minify: true,
    external: ["vite"],
});

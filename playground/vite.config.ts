import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// this ignore is necessary for local tests
/**@ts-ignore*/
import { dTemplatePlugin } from "../src/index";

export default defineConfig({
    plugins: [
        react(),
        dTemplatePlugin(),
    ],
});

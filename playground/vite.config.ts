import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// this ignore is necessary for local tests
/**@ts-ignore*/
import fileTemplate from "../src";

export default defineConfig({
    plugins: [
        react(),
        fileTemplate(),
    ],
});

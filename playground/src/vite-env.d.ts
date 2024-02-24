/// <reference types="vite/client" />

declare module "*.d.template" {
    const content: string;
    export default content;
}

declare module "*.template" {
    const content: string;
    export default content;
}

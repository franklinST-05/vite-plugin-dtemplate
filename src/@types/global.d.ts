declare module "*.d.template" {
    const content: string;
    export { content as default };
}

declare module "*.template" {
    const content: string;
    export { content as default };
}

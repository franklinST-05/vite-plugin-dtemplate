export interface FillTemplateConfig {
    template: string;
    emptyValue?: string;
    skipOnEmpty?: true;
    endDelimiter?: string;
    startDelimiter?: string;
    params: Record<string, string | number | boolean>;
}

export function fillTemplate({
    template,
    params,
    skipOnEmpty,
    emptyValue = "-----",
    startDelimiter = "{{",
    endDelimiter = "}}"
}: FillTemplateConfig) {
    const matcher = new RegExp(`${startDelimiter}(.*?)${endDelimiter}`, "g");
    const expressions = template.match(matcher);

    if (expressions) {
        for (const expression of expressions) {
            const paramKey = String(expression).slice(
                startDelimiter.length,
                (Math.abs(endDelimiter.length) * -1)
            ).trim();

            if (skipOnEmpty && !params[paramKey]) continue;
            const paramValue = params[paramKey] ?? emptyValue;

            template = template.replace(expression, String(paramValue));
        }
    }

    return template;
}

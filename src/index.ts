import { loadEnv, type PluginOption } from "vite";
import { fillTemplate } from "./utils";
import { minimatch } from "minimatch";
import MagicString from "magic-string";
import escape from "jsesc";

let ENVS: Record<string, string | number | boolean> = {};

export interface TemplateFileConfig {
    compact?: false;
    emptyValue?: string;
    skipOnEmpty?: true;
}

export default function templateFile(
    config: TemplateFileConfig = {}
): PluginOption {
    return ({
        name: "d.template:file",
        config(_, env) {
            ENVS = loadEnv(env.mode, process.cwd());
        },
        transform(content, filepath) {
            const patternFilepath = "**/*.{d.template, template}";
            const isValidFilepath = minimatch(filepath, patternFilepath);

            if (!isValidFilepath) return;

            content = fillTemplate({
                template: content,
                params: ENVS,
                startDelimiter: "<<#",
                endDelimiter: ">>",
                emptyValue: config.emptyValue,
                skipOnEmpty: config.skipOnEmpty,
            });

            content = escape(content, {
                quotes: "backtick",
                compact: config.compact ?? true,
                isScriptContext: true,
            });

            content = /* TS */`export default \`${content}\`;`;

            const sourcemap = this.getCombinedSourcemap();
            const magicString = new MagicString(content);

            return {
                code: content,
                map: magicString.generateMap({
                    file: sourcemap.file,
                    source: sourcemap.sources[0],
                    includeContent: true,
                }),
            }
        }
    });
}

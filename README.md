<h1 align="center">vite-plugin-dtemplate</h1>

<p align="center">
  This is a library for template handling in Vite. It allows you to define templates with placeholders (.d.templates) and use environment variables and parameters for custom templates.
</p>

## Install

```sh
yarn add vite-plugin-dts
```

## Usage
In `vite.config.ts`:
```tsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { dTemplatePlugin } from "vite-plugin-dtemplate";

export default defineConfig({
    plugins: [
        react(),
        dTemplatePlugin(),
    ],
});
```
## Templates
Template files follow a specific extension pattern (.d.template), for example:

`.env`
```dotenv
VITE_APPLICATION_NAME="VITE"
```

`example.d.template`
```textplain
Hello world by <<#VITE_APPLICATION_NAME>>
{{endLine}}
```

`index.tsx`

```tsx
import React from "react";
import example from "./example.d.template";

export const App: React.FC = () => {
    return (
        <div>
            {example}
            {/* RESULT:
                Hello world by VITE
                {{endLine}}
            */}
        </div>
    );
};
```

<b>OR</b>

```tsx
import React from "react";
import example from "./example.d.template";
import { fillTemplate } from "vite-plugin-dtemplate/utils";

export const App: React.FC = () => {
    return (
        <div>
            {fillTemplate({
                template: example,
                params: {
                    endLine: "end line..."
                }
            })}
            {/* RESULT:
                Hello world by VITE
                end line...
            */}
        </div>
    );
};
```
### Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

### License
This project is licensed under the MIT License.

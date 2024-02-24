# Vite Plugin DTemplate
Esta é uma biblioteca simples para preenchimento de templates no Vite. Ela permite que você defina templates com placeholders e depois os preencha com valores específicos.

### Uso
Aqui está um exemplo básico de como usar a biblioteca:

```tsx

import React, { useState } from "react";
import { fillTemplate } from "vite-plugin-dtemplate";
import welcomeTemplate from "./example.d.template";

const AppPage: React.FC = () => {

    const [template, setTemplate] = useState<string>(welcomeTemplate);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { clientName } = event.target as unknown as {
            clientName: HTMLInputElement
        };

        setTemplate(fillTemplate({
            template: welcomeTemplate,
            params: {
                clientName: clientName.value,
            }
        }));
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>BASIC EXAMPLE</h1>
                <div className="row">
                    <input name="clientName" placeholder="Your name" />
                    <button type="submit">Emitir</button>
                </div>
                <br />
                <pre>{template}</pre>
            </form>
            <br />
            <br />
            <h1>ENVS</h1>
            <pre>{JSON.stringify(import.meta.env, null, 2)}</pre>
        </main>
    );
};

export default AppPage;
```

### Como funciona o template
No template, as chaves {{name}} representam os parâmetros que serão substituídos pelos valores em tempo de execução. Por exemplo, {{clientName}} será substituído pelo nome do cliente.

Já as <<#NAME>> representam as envs da aplicação, que são buildadas junto ao restante do texto em uma variavel. Por exemplo, <<#VITE_BUSINESS_NAME>> será substituído pelo nome do seu negócio definida em nas suas envs locais do projeto.

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença
Este projeto está licenciado sob a MIT License.

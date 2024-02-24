import React, { useState } from "react";
import "./app.css";

import { fillTemplate } from "../../src/utils";
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

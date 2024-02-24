import React from "react";
import ReactDOM from "react-dom/client";
import AppPage from "./app";

const root = document.getElementById("root") as HTMLDivElement;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <AppPage />
    </React.StrictMode>
);

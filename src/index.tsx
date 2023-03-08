import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContext/AppContex";
import { GlobalStyles } from "ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <GlobalStyles />
    <App />
  </AppContextProvider>
);

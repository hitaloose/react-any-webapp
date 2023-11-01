import React from "react";
import ReactDOM from "react-dom/client";

import { AppContainer } from "./subdomains/app/app.container";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

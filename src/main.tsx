import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/PublicRouter.tsx";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

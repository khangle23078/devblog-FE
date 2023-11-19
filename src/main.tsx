import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/PublicRouter.tsx";
import { Suspense } from "react";
import { Spin } from "antd";
import "./styles/style.css";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.ts";
import "react-quill/dist/quill.snow.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Suspense fallback={<Spin />}>
        <RouterProvider router={router} />
      </Suspense>
    </PersistGate>
  </Provider>
);

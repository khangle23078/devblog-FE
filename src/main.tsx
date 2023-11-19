import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/PublicRouter.tsx";
import {Suspense} from "react";
import {Spin} from "antd";
import "./styles/style.css";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import "react-quill/dist/quill.snow.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense fallback={<Spin />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);

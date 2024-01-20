import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";


import "./index.css";
import router from "./router/router.tsx";
import { store } from "./redux/store.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

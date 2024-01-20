import { createBrowserRouter as Router } from "react-router-dom";
import App from "../App";

const router = Router([
    {
        path: "/",
        element: <App />,
    },
]);

export default router;

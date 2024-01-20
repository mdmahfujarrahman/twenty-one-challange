import express from "express";
import { ProductsRoutes } from "../module/product/product.route.js";

const router = express.Router();

const routes = [
    {
        path: "/products",
        router: ProductsRoutes,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.router);
});

export default router;

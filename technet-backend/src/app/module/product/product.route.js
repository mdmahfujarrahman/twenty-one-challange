import express from "express";
import { ProductController } from "./product.controller.js";

const router = express.Router();

router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSingleProduct);

export const ProductsRoutes = router;

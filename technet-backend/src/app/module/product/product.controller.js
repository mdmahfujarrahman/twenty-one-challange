import { ProductServices } from "./productt.service.js";

const getAllProduct = async (req, res) => {
    try {
        const result = await ProductServices.getAlllProduct();
        res.status(200).json({
            success: true,
            message: "Successfully get all product",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "Successfully get single product",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const ProductController = {
    getAllProduct,
    getSingleProduct,
};

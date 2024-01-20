import { Products } from "./product.model.js";

export const getAlllProduct = async () => {
    try {
        const result = await Products.find().lean();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getSingleProduct = async (productId) => {
    try {
        const result = await Products.findOne({ _id: productId }).lean();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const ProductServices = {
    getAlllProduct,
    getSingleProduct,
};

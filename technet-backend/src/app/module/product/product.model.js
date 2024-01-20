import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Product image is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        trim: true,
    },
    features: {
        type: [String],
        required: [true, "Product features is required"],
        trim: true,
    },
    status: {
        type: Boolean,
        required: [true, "Product status is required"],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Product rating is required"],
        trim: true,
    },
    quantity: {
        type: Number,
        trim: true,
    },
});

export const Products = model("Product", ProductSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 50
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subCategory: {
        type: mongoose.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    attributes: {
        type: Object,
        default: {}
    },
    finalPrice: {
        type: Number
    },
    mainImage: {
        type: Object,
        required: true
    },
    subImages: [{
        type: Object,
    }],
}, {
    timestamps: true
});

export const ProductModel = mongoose.model("Product", productSchema);

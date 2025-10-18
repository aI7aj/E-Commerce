import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
    {
        productID: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            default: 1,
     }
    },
    ],
},
{
    timestamps: true
});

export const CartModel = mongoose.model("Cart", cartSchema);
import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
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
                min: 1
            },
            price: {
                type: Number,
                required: true
            },
            finalPrice: {
                type: Number,
                required: true
            }
        },
    ],
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    coupon: {
        typen: mongoose.Types.ObjectId,
        ref: "Coupon"
    },
    paymentType: {
        type: String,
        enum: ["cash", "card"],
        default: "cash",
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "on the way", "delivered", "cancelled"],
        default: "pending",
        required: true
    }
}, {
    timestamps: true
});

export const OrderModel = mongoose.model("Order", orderSchema);
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true

    },
    productID: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
},
    {
        timestamps: true,
    });

export const ReviewModel = mongoose.model("Review", reviewSchema);

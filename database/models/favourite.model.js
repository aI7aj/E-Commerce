import mongoose from "mongoose";

const FavouriteSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        }
    ],
},
    {
        timestamps: true
    });

export const FavouriteModel = mongoose.model("Favourite", FavouriteSchema);
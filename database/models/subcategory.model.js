import mongoose, { Types } from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categoryID:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:true
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"]
    },
}, {
    timestamps: true
})

export const SubCategoryModel = mongoose.model("SubCategory", subCategorySchema);
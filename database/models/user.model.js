import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: Object,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: {
        type: String
    },
    confirmEmail: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"]
    },
    code: {
        type: String,
        default: null
    }

});

export const UserModel = mongoose.model("User", userSchema);
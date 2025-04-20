import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    name: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: [
        {
            type: String,
            enum: ["black", "white", "navy", "blue", "yellow"]
        }
    ],
    productSize: [
        {
            type: String,
            default: null
        }
    ],
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    sell: {
        type: Number,
        required: true,
        default: 0
    },

}, { timestamps: true, versionKey: false })

const Product = mongoose.model("product", ProductSchema)
export default Product;
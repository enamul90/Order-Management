import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product"
    },
    productSize: {
        type: String,
        default: null
    },
    color: {
        type: String,
        default: null
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        postCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        house: {
            type: String,
            required: true,
        },
        apartment: {
            type: String,
            default: null
        },
        state: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
            default: null
        },
        location: {
            type: String,
            default: null
        }
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
    paymentMethod: {
        type: String,
        enum: ["bkash", "nagad", "rocket", "upay", "cashOnDelivery"],
    },
    transactionId: {
        type: String,
        default: null
    },
    deliveryCharge: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    texes: {
        type: Number,
        default: 0
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    },
    deliveryDate: {
        type: Date,
        default: null
    },
    trackingId: {
        type: String,
        default: null
    },
    trackingUrl: {
        type: String,
        default: null
    },
    cancelDate: {
        type: Date,
        default: null
    },

}, { timestamps: true, versionKey: false });
const Order = mongoose.model("order", OrderSchema)
export default Order
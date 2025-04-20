import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    name: {
        type: String,
        default: "My Shop"
    },
    logo: {
        type: String,
        default: ""
    },
    bkash: {
        number: {
            type: String,
            default: null
        },
        step: [
            {
                type: String,
                default: null
            }
        ]
    },
    nagad: {
        number: {
            type: String,
            default: null
        },
        step: [
            {
                type: String,
                default: null
            }
        ]
    },
    rocket: {
        number: {
            type: String,
            default: null
        },
        step: [
            {
                type: String,
                default: null
            }
        ]
    },
    upay: {
        number: {
            type: String,
            default: null
        },
        step: [
            {
                type: String,
                default: null
            }
        ]
    },
}, { timestamps: true, versionKey: false, })

const Business = mongoose.model("business", BusinessSchema)
export default Business
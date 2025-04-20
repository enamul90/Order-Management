import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        code: {
            type: String,
            default: "0",
        },
        expired: {
            type: Date,
            default: Date.now,
        },
    }
}, { timestamps: true, versionKey: false })

const Admin = mongoose.model('admin', AdminSchema)
export default Admin
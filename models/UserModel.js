

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    {
        type: {
            type: String,
            required: true,
            default: "user",
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        numberPlate: {
            type: String,
            default: "0000",
        },
        phNo: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    }
)
export default mongoose.model('User', userSchema);
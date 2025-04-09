import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    isVerify: { type: Boolean, default: false },
    codeVerify: {type: Number, default: undefined},
    token: { type: String },
    updatedAt: { type: Date, default: Date.now },
},{ versionKey: false });

export default mongoose.model("User", userSchema);

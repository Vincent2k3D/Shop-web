import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  payment_method: { type: String, enum: ["MoMo", "VNPay", "COD"], required: true },
  status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  transaction_id: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Payment", paymentSchema);

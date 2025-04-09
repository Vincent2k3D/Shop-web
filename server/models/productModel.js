import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  image: { type: String },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);

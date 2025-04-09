import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import router from "./routers/router.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(cors()); 
app.use(express.json());

app.use("/api/auth", router);

// Route chính
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Xin chào, đây là server của Vincent",
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

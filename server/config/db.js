import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MongoDB_URI = process.env.MONGODB_URI; // Đảm bảo tên biến đúng

const connectDB = async () => {
    try {
        await mongoose.connect(MongoDB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ ConnectDB success...");
    } catch (error) {
        console.error("❌ ConnectDB fails: " + error.message);
        process.exit(1); // Dừng ứng dụng nếu kết nối thất bại
    }
};

export default connectDB;

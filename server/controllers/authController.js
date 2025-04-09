import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { generateCodeVerify } from "../utils/generatrCode.js";
import sendmail from "../services/emailServide.js";



const authController = {

    signUp: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const code = await generateCodeVerify();

            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "User already exists!" });
            };

            const hashedPassword = await bcrypt.hash(password, 10);

            const token = jwt.sign(
                { email: email }, 
                process.env.JWT_SECRET, 
                { expiresIn: "30d" }
            );

            const newUser = new userModel({
                name: name,
                email: email,
                password: hashedPassword,
                token: token,
                codeVerify: code
            });

            await newUser.save();

            const emailContent = ` Mã xác thực của bạn là: ${code}`;

            await sendmail(email, "Xác Thực Tài Khoản", emailContent);

            res.status(201).json({
                message: "User created successfully!",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                },
                token: token
            });

        } catch (error) {
            console.error("Server error:", error);
            return res.status(500).json({ message: "Internal server error!" });
        }
    },

    isVerify: async (req, res) => {
        try {
            const { codeVerify } = req.body;
    
            const user = await userModel.findOne({ codeVerify });
    
            if (!user) {
                return res.status(404).json({
                    message: "The verification code is incorrect or has expired!!!"
                });
            }
    
            user.isVerify = true;
            user.codeVerify = undefined;
    
            await user.save();
    
            res.status(200).json({
                message: "Authentication successful!!"
            });
    
        } catch (error) {
            console.log("Verification error:", error);
            res.status(500).json({ message: "Server error!" });
        }
    },
    signIn: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await userModel.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            };

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Incorrect password!" });
            };

            if(!user.isVerify){
                return res.status(403).json({
                    message: "Not authenticate"
                });
            };

            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            );

            res.status(200).json({
                message: "Login successful",
                user: {
                    name: user.name,
                    email: user.email,
                },
                token: token
            });
            console.log("Login successful!!!"+ user.name);
        } catch (error) {
            console.error("Login failed: " + error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

export default authController;

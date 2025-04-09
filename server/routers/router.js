import express from "express";
import authController from "../controllers/authController.js";
import productController from "../controllers/productController.js";
import categoryController from "../controllers/categoryController.js";

const router = express.Router();

// Route xử lý đăng nhập
router.post("/signin", authController.signIn);
router.post('/signup', authController.signUp);
router.post('/verify', authController.isVerify);
router.post('/addproduct', productController.product);
router.get('/getproduct', productController.allproduct);
router.post('/categories', categoryController.category);
router.get('/getcategory', categoryController.allCategories);

export default router;

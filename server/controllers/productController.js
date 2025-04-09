import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";

const productController = {
    product: async (req, res) => {
        try {
            const { name, category, description, price, image } = req.body;

            
            const categoryData = await categoryModel.findOne({ name: category });
            if (!categoryData) {
                return res.status(400).json({ message: "Category not found!" });
            }

            const existingProduct = await productModel.findOne({ name });

            if (existingProduct) {
                return res.status(409).json({
                    message: "Product already exists!"
                });
            }

            const newProduct = new productModel({
                name,
                category: categoryData._id,
                description,
                price,
                image
            });

            await newProduct.save();

            res.status(201).json({
                message: "Add product successful!!!",
                product: {
                    name,
                    category: categoryData._id,
                    description,
                    price,
                    image
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Server error!!!"
            });
        }
    },

    allproduct: async (req, res) => {
        try {
            const products = await productModel.find().populate("category");
    
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            await productModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Delete product successful!!!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, category, description, price, image } = req.body;

            const categoryData = await categoryModel.findOne({ name: category });
            if (!categoryData) {
                return res.status(400).json({ message: "Category not found!" });
            }

            const updatedProduct = await productModel.findByIdAndUpdate(
                id,
                { name, category: categoryData._id, description, price, image },
                { new: true }
            );

            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found!!!" });
            }

            res.status(200).json({
                message: "Update product successful!!!",
                product: updatedProduct
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    getProductById: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await productModel.findById(id).populate("category");

            if (!product) {
                return res.status(404).json({ message: "Product not found!!!" });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    searchProducts: async (req, res) => {
        try {
            const { query } = req.query;
            const products = await productModel.find({
                name: { $regex: query, $options: "i" }
            }).populate("category");

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    filterProducts: async (req, res) => {
        try {
            const { category } = req.query;
            const products = await productModel.find({ category }).populate("category");

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    sortProducts: async (req, res) => {
        try {
            const { sortBy } = req.query;
            const products = await productModel.find().populate("category").sort({ [sortBy]: 1 });

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    paginateProducts: async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const products = await productModel.find().populate("category")
                .skip((page - 1) * limit)
                .limit(limit);

            const totalProducts = await productModel.countDocuments();
            const totalPages = Math.ceil(totalProducts / limit);

            res.status(200).json({
                products,
                totalPages,
                currentPage: Number(page)
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    getProductsByCategory: async (req, res) => {
        try {
            const { categoryId } = req.params;
            const products = await productModel.find({ category: categoryId }).populate("category");

            if (!products.length) {
                return res.status(404).json({ message: "No products found in this category!!!" });
            }

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    getProductsByPriceRange: async (req, res) => {
        try {
            const { minPrice, maxPrice } = req.query;
            const products = await productModel.find({
                price: { $gte: minPrice, $lte: maxPrice }
            }).populate("category");

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },
    getProductsByRating: async (req, res) => {
        try {
            const { rating } = req.query;
            const products = await productModel.find({ rating: { $gte: rating } }).populate("category");

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    getProductsByAvailability: async (req, res) => {
        try {
            const { available } = req.query;
            const products = await productModel.find({ available }).populate("category");

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },
    
};

export default productController;

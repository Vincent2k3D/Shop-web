import categoryModel from "../models/categoryModel.js";

const categoryController = {
    category: async (req, res) => {
        try {
            const { name, description } = req.body;

            const newCategory = new categoryModel({
                name,
                description,
            });

            await newCategory.save();

            res.status(201).json({
                message: "Add category successful!!!",
                category: { name, description }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    allCategories: async (req, res) => {
        try {
            const categories = await categoryModel.find(); 

            res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            await categoryModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Delete category successful!!!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    updateCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description } = req.body;

            const updatedCategory = await categoryModel.findByIdAndUpdate(
                id,
                { name, description },
                { new: true }
            );

            if (!updatedCategory) {
                return res.status(404).json({ message: "Category not found!!!" });
            }

            res.status(200).json({
                message: "Update category successful!!!",
                category: updatedCategory
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    },

    getCategoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const category = await categoryModel.findById(id);

            if (!category) {
                return res.status(404).json({ message: "Category not found!!!" });
            }

            res.status(200).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error!!!" });
        }
    }
};

export default categoryController;

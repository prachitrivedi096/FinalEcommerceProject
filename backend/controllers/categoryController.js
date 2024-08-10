const Category = require('../models/Category.js');

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new category
const createCategory = async (req, res) => {
  // const { name } = req.body.name;
  const categoryData = {};
  categoryData.name = req.body.name; 
  const newCategory = new Category(categoryData);

  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.log("Log Cat",error)
    res.status(400).json({ message: error.message });
  }
};

// Update a category
const updateCategory = async (req, res) => {
  const  id  = req.params;
  const  name  = req.body.name;

  try {
    const updatedCategory = await Category.findByIdAndUpdate({_id:id}, { name:name }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  const id  = req.params.id;

  try {
    const deletedCategory = await Category.findByIdAndDelete({_id:id});
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
import Product from "../models/product.js";
import mongoose from "mongoose";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error in fetching: ", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;
  if (!product || !product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide required fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    return res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Product id",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(201).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating the product: ", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Product id",
    });
  }
  try {
    await Product.findByIdAndDelete(id);
    return res.status(201).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};
export { getProducts, createProduct, updateProduct, deleteProduct };

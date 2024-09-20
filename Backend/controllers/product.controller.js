const mongoose = require("mongoose");
const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in Get products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide product id" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide valid product id" });
  }

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in Update product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide product id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.error("Error in Delete product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  deleteProduct,
};

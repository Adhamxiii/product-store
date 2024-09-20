const express = require("express");

const {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} = require("../controllers/product.controller");
const router = express.Router();

// Create Products
router.post("/", createProduct);

// Delete Product
router.delete("/:id", deleteProduct);

// Get Products
router.get("/", getProducts);

// Update Product
router.put("/:id", editProduct);

module.exports = router;

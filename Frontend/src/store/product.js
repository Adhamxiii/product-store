import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const response = await axios.post(
      "/api/products",
      newProduct
    );
    const data = await response.data;
    if (data.success) {
      set((state) => ({ ...state, products: [...state.products, data.data] }));
    }
    return {
      success: data.success,
      message: data.success ? "Product created successfully." : data.message,
    };
  },
  getProducts: async () => {
    const response = await axios.get("/api/products");
    const data = await response.data;
    if (data.success) {
      set((state) => ({...state, products: data.data }));
    }
  },
  deleteProduct: async (productId) => {
    const response = await axios.delete(`/api/products/${productId}`);
    const data = await response.data;
    if (data.success) {
      set((state) => ({
        products: state.products.filter((product) => product._id!== productId),
      }));
    }
    return { success: data.success, message: data.message };
  },
  updateProduct: async (productId, updatedProduct) => {
    if (!updatedProduct.name ||!updatedProduct.image ||!updatedProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const response = await axios.put(`/api/products/${productId}`, updatedProduct);
    const data = await response.data;
    if (data.success) {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId? {...product,...updatedProduct } : product
        ),
      }));
    }
    return { success: data.success, message: data.message };
  },
}));

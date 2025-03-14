import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const productRoute = express.Router();

productRoute.get("/", getProducts);

productRoute.post("/", createProduct);

productRoute.put("/:id", updateProduct);

productRoute.delete("/:id", deleteProduct);

export default productRoute;

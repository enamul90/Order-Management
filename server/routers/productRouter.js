import express from "express";
import { createProduct, deleteProduct, readProduct, readSingleProduct, updateProduct } from "../controllers/ProductController.js";
import Authorized from "../middlewares/authorized.js";

const ProductRouter = express.Router()

ProductRouter.post("/product/create", Authorized, createProduct)
ProductRouter.get("/product/read/:page", Authorized, readProduct)
ProductRouter.get("/product/read/single/:productId", readSingleProduct)
ProductRouter.put("/product/update/:productId", Authorized, updateProduct)
ProductRouter.delete("/product/delete/:productId", Authorized, deleteProduct)

export default ProductRouter;
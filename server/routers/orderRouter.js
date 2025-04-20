import express from "express";
import { CreateOrder, GetOrders, GetSingleOrder, UpdateOrder } from "../controllers/orderController.js";
import Authorized from "../middlewares/authorized.js";

const Order = express.Router()

Order.post("/product/order/create", CreateOrder)
Order.get("/product/order/read", Authorized, GetOrders)
Order.get("/product/order/read/:orderId", GetSingleOrder)
Order.put("/product/order/update/:orderId", Authorized, UpdateOrder)

export default Order
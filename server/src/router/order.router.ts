import express from "express";
import {
  placeOrder,
  getQueue,
  setStatus,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", placeOrder);
orderRouter.get("/queue", getQueue);
orderRouter.patch("/:id/status", setStatus);

export default orderRouter;

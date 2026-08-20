import type { Request, Response } from "express";
import { OrderStatus } from "../generated/prisma/client.js";
import * as orderModel from "../models/order.model.js";

export async function placeOrder(req: Request, res: Response) {
  const { drinkId, customerName } = req.body;

  if (!Number.isInteger(drinkId)) {
    return res.status(400).json({ error: "drinkId must be an integer" });
  }
  if (typeof customerName !== "string" || customerName.trim() === "") {
    return res.status(400).json({ error: "customerName is required" });
  }

  const order = await orderModel.create(drinkId, customerName.trim());
  res.status(201).json({ order });
}

export async function getQueue(req: Request, res: Response) {
  const queue = await orderModel.findQueue();
  res.json({ queue });
}

export async function setStatus(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid order id" });
  }
  if (!Object.values(OrderStatus).includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  const order = await orderModel.updateStatus(id, status);
  res.json({ order });
}

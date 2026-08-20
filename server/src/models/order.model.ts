import prisma from "../db.js";
import type { OrderStatus } from "../generated/prisma/client.js";

export async function create(drinkId: number, customerName: string) {
  return prisma.order.create({
    data: { drinkId, customerName },
  });
}

export async function findQueue() {
  return prisma.order.findMany({
    where: { status: "QUEUED" },
    include: { drink: { select: { name: true, price: true } } },
    orderBy: { createdAt: "asc" },
  });
}

export async function updateStatus(id: number, status: OrderStatus) {
  return prisma.order.update({
    where: { id },
    data: { status },
  });
}

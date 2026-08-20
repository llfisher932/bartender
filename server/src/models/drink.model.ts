import prisma from "../db.js";
import type { Drink } from "../generated/prisma/client.js";

export async function findAll(): Promise<Drink[]> {
  return prisma.drink.findMany();
}

import prisma from "../db.js";

export type Cocktail = {
  id: number;
  name: string;
  price: number;
};

export async function findAll(): Promise<Cocktail[]> {
  return prisma.drink.findMany({
    select: { id: true, name: true, price: true },
  });
}

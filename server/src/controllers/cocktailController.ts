import prisma from "../db.js";

type Cocktail = {
  name: string;
  price: number;
  id: number;
};

export async function createCocktails() {
  const createdCocktails = await prisma.drink.createMany({
    data: [
      {
        name: "Margarita",
        price: 12.99,
      },
      {
        name: "Mojito",
        price: 10.99,
      },
      {
        name: "Old Fashioned",
        price: 14.99,
      },
    ],
  });

  return createdCocktails;
}

export async function getMenu() {
  const menu = await prisma.drink.findMany({
    select: {
      name: true,
      price: true,
      id: true,
    },
  });

  return menu;
}

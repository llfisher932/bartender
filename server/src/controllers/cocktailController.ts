import express from "express";
import prisma from "../db.js";

type Cocktail = {
  name: string;
  price: number;
  id: number;
};

const cocktailController = express.Router();

cocktailController.get("/initialize", async (req, res) => {
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

  return res.json({
    message: "Cocktails initialized",
    createdCocktails,
  });
});

cocktailController.get("/menu", async (req, res) => {
  const menu = await prisma.drink.findMany({
    select: {
      name: true,
      price: true,
      id: true,
    },
  });

  return res.json({ menu });
});

export default cocktailController;

import express from "express";
import { createCocktails, getMenu } from "../controllers/cocktailController.js";

const cocktailRouter = express.Router();

cocktailRouter.get("/initialize", async (req, res) => {
  const createdCocktails = createCocktails();

  return res.json({
    message: "Cocktails initialized",
    createdCocktails,
  });
});

cocktailRouter.get("/menu", async (req, res) => {
  const menu = getMenu();

  return res.json({ menu });
});

export default cocktailRouter;

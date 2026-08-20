import express from "express";
import { getMenu } from "../controllers/cocktail.controller.js";

const cocktailRouter = express.Router();

cocktailRouter.get("/menu", getMenu);

export default cocktailRouter;

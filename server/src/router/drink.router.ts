import express from "express";
import { getMenu } from "../controllers/drink.controller.js";
const cocktailRouter = express.Router();

cocktailRouter.get("/menu", getMenu);

export default cocktailRouter;

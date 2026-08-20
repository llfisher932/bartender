import type { Request, Response } from "express";
import * as cocktailModel from "../models/cocktail.model.js";

export async function getMenu(req: Request, res: Response) {
  const menu = await cocktailModel.findAll();
  res.json({ menu });
}

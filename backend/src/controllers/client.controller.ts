import type { NextFunction, Response, Request } from "express";
import * as client_service from "../services/client.service.js";

export const get_products_c = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const products = await client_service.getListProducts();

  return res.json(products);
};

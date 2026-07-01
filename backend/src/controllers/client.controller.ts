import type { NextFunction, Response, Request } from "express";
import * as client_service from "../services/client.service.js";
import { tryCatch } from "../functions/Utils.js";

export const get_products_c = tryCatch(async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const products = await client_service.getListProducts();

  return res.json(products);
});

export const addCommand_c = tryCatch(async (req, res, next) => {
  const command = req?.body?.command;

  const result = await client_service.addCommand_s(command)
  return res.json(result)
})

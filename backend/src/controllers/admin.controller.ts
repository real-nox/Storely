import { tryCatch } from "../functions/Utils.js";
import * as admin_service from "../services/admin.service.js";

export const addProduct_c = tryCatch(async (req, res, next) => {
  const productInfo = req?.body?.productInfo;

  const result = await admin_service.addProduct_s(productInfo);
  return res.json(result);
});

export const getProductByName_c = tryCatch(async (req, res, next) => {
  const productName = req?.body?.productName;

  const result = await admin_service.getProductByName_s(productName);
  return res.json(result);
});

export const delProductById_c = tryCatch(async (req, res, next) => {
  const productId = req?.body?.id;

  const result = await admin_service.delProductById_s(productId);
  return res.json(result);
});

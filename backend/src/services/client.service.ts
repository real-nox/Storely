import { AsyncFunctions } from "../functions/Utils.js";
import * as product_repository from "../repositories/product.repository.js";

export const getListProducts = AsyncFunctions(async () => {
  const list = await product_repository.getProducts();

  if (!list) return { success: false, error: "There are no products" };
  return { success: true, list };
});

import { AsyncFunctions } from "../functions/Utils.js";
import * as product_repository from "../repositories/product.repository.js";

export const addProduct_s = AsyncFunctions(
  async (product: product_repository.Items) => {
    const result = await product_repository.addProduct(product);

    if (!result)
      return {
        success: false,
        error: "An Error had happened! Could not add the product!",
      };
    return { success: true, error: "" };
  },
);

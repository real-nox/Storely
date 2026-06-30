import { AsyncFunctions } from "../functions/Utils.js";
import * as product_repository from "../repositories/product.repository.js";

export const addProduct_s = AsyncFunctions(
  async (product: product_repository.Items) => {
    const result = await product_repository.addProduct(product);

    if (!product) return { success: false, error: "Complete the form!" };
    if (!result)
      return {
        success: false,
        error: "An Error had happened! Could not add the product!",
      };
    return { success: true, id: result, error: "" };
  },
);

export const getProductByName_s = AsyncFunctions(
  async (productName: string) => {
    if (!productName) return { success: false, error: "No name provided!" };

    const result = await product_repository.getProductByName(productName);

    if (!result)
      return {
        success: true,
        error: "",
      };
    return {
      success: false,
      error: "There is a product with the same name!",
    };
  },
);

export const delProductById_s = AsyncFunctions(async (productId: number) => {
  if (!productId) return { success: false, error: "No product ID Provided!" };

  const foundProduct = await product_repository.getProductById(productId);

  if (!foundProduct) return { success: false, error: "Unfound product!" };

  const isDeleted = await product_repository.delProductById(productId);

  if (!isDeleted)
    return { success: false, error: "Something had happened in the database!" };

  return { success: true, error: "" };
});

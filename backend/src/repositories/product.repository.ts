import { query } from "../database/initDB.js";
import { AsyncFunctions } from "../functions/Utils.js";

export interface Items {
  id: string;
  category: string;
  name: string;
  icon: string;
  description: string;
  qte: number;
  price: number;
  isPromo: boolean;
}

export const getProducts = AsyncFunctions(async () => {
  const result = await query("select * from product");

  if (!result || result?.rows?.length === 0) return null;
  return result.rows;
});

export const addProduct = AsyncFunctions(async (productInfo: Items) => {
  const result = await query(
    "insert into product (name, category, icon, description, qte, price) values ($1, $2, $3, $4, $5, $6) returning id",
    [
      productInfo.name,
      productInfo.category,
      productInfo.icon,
      productInfo.description,
      productInfo.qte,
      productInfo.price,
    ],
  );

  if (!result || !result?.rowCount) return false;
  return result.rows[0];
});

export const getProductByName = AsyncFunctions(async (productName: string) => {
  const result = await query("select name from product where name = $1", [
    productName,
  ]);

  if (result.rows.length === 0) return false;
  return true;
});

export const getProductById = AsyncFunctions(async (productId: number) => {
  const result = await query("select id from product where id = $1", [
    productId,
  ]);

  if (result.rows.length === 0) return false;
  return true;
});

export const delProductById = AsyncFunctions(async (productId: number) => {
  const result = await query("delete from product where id = $1", [productId]);

  if (result.rows.length === 0) return false;
  return true;
});

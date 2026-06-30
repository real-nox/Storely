import { query } from "../database/initDB.js";
import { AsyncFunctions } from "../functions/Utils.js";

export const getProduct = AsyncFunctions(async () => {
  const result = await query("select * from product");

  if (!result || result?.rows?.length === 0) return null;
  return result.rows;
});

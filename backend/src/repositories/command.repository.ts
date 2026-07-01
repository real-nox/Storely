import { query } from "../database/initDB.js";
import { AsyncFunctions } from "../functions/Utils.js";
import type { Command } from "../services/client.service.js";

export const addCommand = AsyncFunctions(async (commandInfo: Command) => {
    console.log(commandInfo)
  const {
    firstName,
    lastName,
    city,
    code,
    email,
    phone,
    productId,
    state,
    street,
  } = commandInfo;

  const fullName = lastName + " " + firstName;

  const fullAddress =
    street + " " + city + " " + state + " Code postal " + code;

  const result = await query("inset into command (name, email, phone, address, produitsId) values ($1, $2, $3, $4, $5) returning id", [
    fullName,
    email,
    phone,
    fullAddress,
    productId,
  ]);

  return result.rows;
});

import { AsyncFunctions } from "../functions/Utils.js";
import * as product_repository from "../repositories/product.repository.js";
import * as command_repository from "../repositories/command.repository.js";

export interface Command {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  code: string;
  productId: [{
    id: number,
    qte: number
  }];
}

export const getListProducts = AsyncFunctions(async () => {
  const list = await product_repository.getProducts();

  if (!list) return { success: false, error: "There are no products" };
  return { success: true, list };
});

export const addCommand_s = AsyncFunctions(async (commandInfo : Command) => {
  if (!commandInfo) return { success: false, error: "There was no command information"}

  const result = await command_repository.addCommand(commandInfo)

  if (!result) return { success: false, error: "Could not add command!"}

  return { success: true, error: "", response: result }
})
import { Router } from "express";
import { tryCatch } from "../functions/Utils.js";
import { addCommand_c, get_products_c } from "../controllers/client.controller.js";

const clientR = Router();

clientR.get("/products", tryCatch(get_products_c))

clientR.post("/checkout", tryCatch(addCommand_c))

export default clientR;

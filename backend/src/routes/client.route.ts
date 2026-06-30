import { Router } from "express";
import { tryCatch } from "../functions/Utils.js";
import { get_products_c } from "../controllers/client.controller.js";

const clientR = Router();

clientR.get("/products", tryCatch(get_products_c))

export default clientR;

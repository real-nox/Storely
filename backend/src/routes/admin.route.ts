import { Router } from "express";
import sessionM from "../middlewares/session.middleware.js";
import { tryCatch } from "../functions/Utils.js";
import { addProduct_c } from "../controllers/admin.controller.js";

const adminR = Router();

adminR.use(sessionM);

adminR.post("/products", tryCatch(addProduct_c))

export default adminR;

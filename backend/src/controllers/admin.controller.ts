import { tryCatch } from "../functions/Utils.js";
import * as admin_service from "../services/admin.service.js";

export const addProduct_c = tryCatch(async(req, res, next) => {
    const productInfo = req?.body?.productInfo;

    const result = await admin_service.addProduct_s(productInfo)
    return res.json(result)
})
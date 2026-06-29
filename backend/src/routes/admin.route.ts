import { Router, type Request, type Response } from "express";
import sessionM from "../middlewares/session.middleware.js";

const adminR = Router();

adminR.get("/", (req: Request, res: Response) => {
  res.send("Hi");
});

adminR.use(sessionM);

export default adminR;

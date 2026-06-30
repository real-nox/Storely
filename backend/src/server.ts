import express from "express";
import cors from "cors";
import { config } from "dotenv";
import clientR from "./routes/client.route.js";
import adminR from "./routes/admin.route.js";
import { InitDB } from "./database/initDB.js";

config({ quiet: true });

const api = express();

const client: string = process.env.CLIENT_ENDPOINT ?? "http://localhost:5173";

api.use(
  cors({
    origin: client,
    credentials: true,
  }),
);
api.use(express.json())

api.use("/client", clientR);
api.use("/admin", adminR);

api.listen(5500, async() => {
  console.log("[Server] Server is online");
  await InitDB()
});

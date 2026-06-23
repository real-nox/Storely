import express from "express";
import cors from "cors";
import { config } from "dotenv";

config({ quiet: true });

const api = express();

const client : string = process.env.CLIENT_ENDPOINT ?? "http://localhost:5173";

api.use(
  cors({
    origin: client,
    credentials: true,
  }),
);

api.listen(5500, () => {
  console.log("[Server] Server is online");
});

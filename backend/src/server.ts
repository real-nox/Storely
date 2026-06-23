import express from "express";

const api = express();

api.listen(5500, () => {
    console.log("[Server] Server is online");
});

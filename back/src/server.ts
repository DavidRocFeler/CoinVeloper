import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./routes/indexRoutes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use(indexRoutes);

server.get("/", (req,res) => res.send("server listeng"));

export default server;

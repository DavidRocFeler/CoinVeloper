import "reflect-metadata";

import dontenv from "dotenv";
import {PORT} from "./config/envs"
import server from "./server";
import { AppDataSource } from "./config/data-source";

dontenv.config();

AppDataSource.initialize()
    .then(() => {
        console.log("data base conect");
        server.listen(PORT, () => {
            console.log(`server listeng on http://localhost:${PORT}`);  
        }); 
    })
    .catch(error =>console.log(error));
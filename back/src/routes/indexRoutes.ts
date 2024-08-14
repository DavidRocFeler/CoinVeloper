import { Router } from "express";
import userRouter from "./userRouter";

const indexRouter: Router = Router();
 
indexRouter.use("/users", userRouter);

export default indexRouter;

//* protocolo host path 
// http://localhost:3000/segmento1/segmento2/.....
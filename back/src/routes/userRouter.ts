import { Router } from "express";
import { getAllUsers, getUserById, register } from "../controllers/userControllers";
import userValidate from "../middlewares/userValidateMiddlewares";


const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", userValidate, register);

export default userRouter;


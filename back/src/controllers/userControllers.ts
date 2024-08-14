import { Request, Response } from "express";
import { User } from "../entities/UserEntity";
import { createUserService, getAllUsersService, getUserByIdService } from "../service/userServices";
import ICreateUserDto from "../dtos/ICreateUserDto";



// GET /user => obtener todos el listado de todos los usuarios
export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const users: User[] = await getAllUsersService()
        res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};


// GET /user/:id => obtener el detalle de un usuario especifico
export const getUserById = async (
    req: Request<{id:string}>,
    res: Response
) => {
    const {id} = req.params;
    try {
        const user = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json ({message: error.meesage})
    }
}

// POST /user/register => post para registrar usuario
export const register = async (
    req: Request <{}, {}, ICreateUserDto >,
    res: Response
) => {
    const { name, email, country, whatsapp } = req.body;
    console.log('Datos recibidos para registrar usuario:', { name, email, country, whatsapp });
    try {
        const newUser: User = await createUserService ({
            name,
            email,
            country,
            whatsapp,
        });
        res.status(200).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.meessage})
    }
};


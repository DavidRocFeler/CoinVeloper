import {Response, Request, NextFunction } from "express";
import ICreateUserDto from "../dtos/ICreateUserDto";

const userValidate = (
    req: Request<{},{},ICreateUserDto>,
    res: Response,
    next: NextFunction
) => {
    const { name, email, country, whatsapp } = req.body;
    try {
        //validacion de name 
        if(!name) throw new Error ("esto se requiere");
        if(name.length < 3)
            throw new Error("El campo no debe tener menos de 3 caracteres");
        if(name.length > 20)
            throw new Error("El campo debe ser menor a 20 caracteres");

        // validacion de email
        if (!email) throw new Error("El email es requerido");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
        throw new Error("El campo email debe ser un email válido");

        // validacion de country
        if (!country) throw new Error("El campo country es requerido");
        

        // validación de whatsapp (opcional)
        if (whatsapp && whatsapp.trim() !== '')  {
            const whatsappRegex = /^\+?[0-9]{10,15}$/; // Permite un símbolo + opcional seguido de 10 a 15 dígitos
            if (!whatsappRegex.test(whatsapp))
                throw new Error("El campo whatsapp debe ser un número de teléfono válido");
        }
        
    } catch (error) {
        if( error instanceof Error) {
            return res.status(400).json({ error: error.message});
        }
    }
    next();
};

export default userValidate;




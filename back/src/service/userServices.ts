import ICreateUserDto from "../dtos/ICreateUserDto";
import { User } from "../entities/UserEntity";
import {  userRepository } from "../repository/indexRepository";

export const getAllUsersService = async ():  Promise<User[]> => {
    const allUsers: User[] = await userRepository.find();
    return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser: User | null = await userRepository.findOneBy({id});
    
    if (!foundUser) throw Error (`usuario con id: ${id} no encontrado`);

    return foundUser;
};

export const createUserService = async (createUserDto: ICreateUserDto) => {
    const { name, email, country, whatsapp } = createUserDto;
    // 1 verificar que el usuario no se encuentre registrado 
    const foundUser = await userRepository.findOneBy({ email });
    if(foundUser) {
        throw new Error(`el email ${email} ya se registro`); 
    }
        

    // 3 crear usuario
    const newUser: User = userRepository.create({
        name, email, country, whatsapp 
    });

    
    // 5 guardar en base de datos 
    await userRepository.save(newUser);
    
    return newUser;
};

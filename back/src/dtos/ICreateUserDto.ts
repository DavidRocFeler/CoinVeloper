interface ICreateUserDto {
    name: string;
    email: string;
    country: string;
    whatsapp?: string;
}

export default ICreateUserDto
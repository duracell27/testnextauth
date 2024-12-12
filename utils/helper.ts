import bcrypt from "bcryptjs";

export function saltAndHashPassword(password: string){
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}
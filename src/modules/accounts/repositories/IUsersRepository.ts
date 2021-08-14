import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../entities/User";


interface IUsersRepository {
    //findByName(name: string): Promise<User>;
    //list(): Promise<User[]>;
    create(data: ICreateUsersDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
};

export { IUsersRepository };
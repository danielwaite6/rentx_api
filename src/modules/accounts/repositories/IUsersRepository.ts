import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";


interface IUsersRepository {
    //findByName(name: string): Promise<User>;
    //list(): Promise<User[]>;
    create(data: ICreateUsersDTO): Promise<void>;
};

export { IUsersRepository };
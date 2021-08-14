import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";



@injectable()
class CreateUserUseCases {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository) { };

    async execute({ name, email, password, driver_license }: ICreateUsersDTO): Promise<void> {

        const userEmailAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userEmailAlreadyExists) {
            throw new AppError('Email já existe..');
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });
    }
}
export { CreateUserUseCases }
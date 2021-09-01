import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserTokensRepository } from "../../repositories/IUsersTokensRepository";
import auth from "../../../../config/auth";
//import { DayJSDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayJSDateProvider";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
//import { AppError } from "../../../../errors/AppError";


interface IRequest {
    email: string;
    password: string;
};

interface IResponse {
    user: {
        name: string,
        email: string,
    },
    token: string,
    refresh_token: string,
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUserTokensRepository,
        @inject("DayJSDateProvider")
        private dateProvider: IDateProvider,
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // Usuario Existe ???
        const { expires_in_token, secret_refresh_token, secret_token, expires_in_refresh_token, expires_refresh_token_days } = auth;

        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email ou password incorretos.");
        };
        ///////////////////////////////////////////////////////////////
        // Senha está correta ?
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Email ou password incorretos.");
        };
        ///////////////////////////////////////////////////////////////
        // Então gere o JsonWebToken.
        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        });

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dateProvider.addDays(expires_refresh_token_days);

        await this.usersTokensRepository.create({
            expires_date: refresh_token_expires_date,
            refresh_token,
            user_id: user.id,
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            },
            refresh_token
        }

        return tokenReturn;
    };




};
export { AuthenticateUserUseCase };
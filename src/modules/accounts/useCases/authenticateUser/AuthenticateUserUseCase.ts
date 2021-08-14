import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

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
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // Usuario Existe ???
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error("Email ou password incorretos.");
        };
        ///////////////////////////////////////////////////////////////
        // Senha está correta ?
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email ou password incorretos.");
        };
        ///////////////////////////////////////////////////////////////
        // Então gere o JsonWebToken.
        const token = sign({}, "9ef800e2097153999caf9264cc8dc95c", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    };




};
export { AuthenticateUserUseCase };
import { injectable, inject } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError';
//import { AppError } from '../../../../errors/AppError';
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
};

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository) { };

    async execute({ name, description }: IRequest): Promise<void> {

        const specificationsAlreadyExists = await this.specificationsRepository.findByName(name);

        if (specificationsAlreadyExists) {
            throw new AppError('Nome dessa especificação já existe..');
        }

        await this.specificationsRepository.create({ name, description })
    }
}
export { CreateSpecificationUseCase };

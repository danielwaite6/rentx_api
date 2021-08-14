import { injectable, inject } from 'tsyringe'
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

    execute({ name, description }: IRequest): void {

        const specificationsAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationsAlreadyExists) {
            throw new Error('Nome dessa especificação já existe..');
        }

        this.specificationsRepository.create({ name, description })
    }
}
export { CreateSpecificationUseCase };

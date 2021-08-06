import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
};

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) { };

    execute({ name, description }: IRequest): void {

        const specificationsAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationsAlreadyExists) {
            throw new Error('Nome dessa especificação já existe..');
        }

        this.specificationsRepository.create({ name, description })
    }
}
export { CreateSpecificationUseCase };

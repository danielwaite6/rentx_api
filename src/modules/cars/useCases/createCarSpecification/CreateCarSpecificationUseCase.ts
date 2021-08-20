import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    car_id: string;
    specifications_id: string[];
};

@injectable()
class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,

        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository,
    ) { }

    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carsExists = await this.carsRepository.findById(car_id);

        if (!carsExists) {
            throw new AppError("Carro não existe.");
        };

        const specifications = await this.specificationRepository.findByIds(
            specifications_id
        );

        carsExists.specifications = specifications;

        await this.carsRepository.create(carsExists);

        return carsExists;


    }
};
export { CreateCarSpecificationUseCase };
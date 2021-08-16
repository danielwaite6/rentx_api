import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    available: boolean;
    category_id: string;
}


@injectable()
class CreateCarUseCase {


    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
    ) { }

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        available,
        category_id
    }: IRequest): Promise<Car> {

        const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);


        //console.log("license_plate: ", carAlreadyExists.license_plate);

        if (carAlreadyExists) {
            throw new AppError("Carro já existe");
        }

        const car = await this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            available,
            category_id
        });

        console.log('license_plate:', car.license_plate);
        console.log('license_plate:', typeof car.license_plate);

        return car;
    }
}
export { CreateCarUseCase };
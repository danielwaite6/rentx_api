import { AppError } from "../../../../shared/errors/AppError";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../infra/typeorm/repositories/IRentalsRepository";

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: string;
};

class CreateRentalUseCase {

    constructor(
        private rentalsRepository: IRentalsRepository,
    ) { };

    async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {

        const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if (carUnavailable) {
            throw new AppError("Carro está indisponivel..");
        };


        const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if (rentalOpenToUser) {
            throw new AppError("There's a rental in progress for user !!");
        }

        const rental = this.rentalsRepository.create({
            user_id,
            car_id,
            expected_return_date,
        });

        return rental;
    }
};
export { CreateRentalUseCase }
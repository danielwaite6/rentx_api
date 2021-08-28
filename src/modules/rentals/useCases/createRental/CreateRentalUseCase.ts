
import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";
//import { IRentalsRepository } from "../../infra/typeorm/repositories/IRentalsRepository";



interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
};

@injectable()
class CreateRentalUseCase {

    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalsRepository,

        @inject("DayJSDateProvider")
        private dateProvider: IDateProvider,
    ) { };

    async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {

        console.log("HI:", car_id, user_id, expected_return_date);


        const minimunHour = 24;


        const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if (carUnavailable) {
            throw new AppError("Carro está indisponivel..");
        };


        const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if (rentalOpenToUser) {
            throw new AppError("There's a rental in progress for user !!");
        };


        const dateNow = this.dateProvider.dateNow();

        const compare = this.dateProvider.compareInHours(
            dateNow,
            expected_return_date,
        );


        if (compare < minimunHour) {
            throw new AppError("Invalid return time..");
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
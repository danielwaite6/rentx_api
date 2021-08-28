import { container } from 'tsyringe';

import '../../shared/container/providers';

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { CarsImagesRepository } from '../../modules/cars/infra/typeorm/repositories/CarsImagesRepository';
import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository';
import { ICarsImagesRepository } from '../../modules/cars/repositories/ICarsImagesRepository';
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { RentalsRepository } from '../../modules/rentals/infra/typeorm/repositories/RentalsRepository';
import { IRentalsRepository } from '../../modules/rentals/repositories/IRentalsRepository';
//**************************************************************************************************** */
//import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
//import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
//******************************************************************************************/
//import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
//import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
//******************************************************************************************/
//import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
//import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
//******************************************************************************************/
// PASSAR A INTERFACE ICategoriesRepository e a implementação dessa Interface
// para criar um SINGLETON.
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);


container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);


container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
);

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",
    CarsImagesRepository
);


container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository
);









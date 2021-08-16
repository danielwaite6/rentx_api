import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
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









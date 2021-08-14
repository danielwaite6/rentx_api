import { container } from 'tsyringe';
//******************************************************************************************/
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
//******************************************************************************************/
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
//******************************************************************************************/
// PASSAR A INTERFACE ICategoriesRepository e a implementação dessa Interface
// para criar um SINGLETON.
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);


container.registerSingleton<ISpecificationRepository>(
    "CategoriesRepository",
    SpecificationRepository
);
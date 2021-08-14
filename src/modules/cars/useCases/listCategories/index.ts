import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";



const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)



export { listCategoriesController, listCategoriesUseCase }
import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategory } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {

    create({ name, description }: ICreateCategory): void {
        console.log('PostgresCategoriesRepository create: ', name, description);
        return null;
    }
    findByName(name: string): Category {
        console.log('PostgresCategoriesRepository findByName: ', name);
        return null;
    }
    list(): Category[] {
        console.log('PostgresCategoriesRepository list: ');
        return null;
    }

};
export { PostgresCategoriesRepository };

import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    //private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = getRepository(Category);
    };


    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name, description
        });
        // Método save() do typeorm, salva uma determinada entidade no banco de dados. 
        //Se a entidade não existir no banco de dados, a insere, caso contrário, atualiza.
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        // SELECT * FROM CATEGORIES WHERE name = "name" limit 1;
        const category = await this.repository.findOne({ name });
        return category;
    }

};
export { CategoriesRepository };
import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRouter = Router();

const specificationsRepository = new SpecificationRepository()

specificationRouter.post('/', (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(specificationsRepository);
    createSpecificationService.execute({ name, description });

    return response.status(201).json('Especificação criada com sucesso.');
});


export { specificationRouter };
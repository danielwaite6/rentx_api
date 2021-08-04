import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
    const { name, description } = request.body;

    console.log("name, description: ", name, description);


    categories.push({
        name,
        description,
    });

    return response.status(201).send();
});

export { categoriesRoutes };


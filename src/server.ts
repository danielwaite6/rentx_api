import express from 'express';
import { categoriesRoutes } from './routes/categories.routes'
import { specificationRouter } from './routes/specification.routes'


const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.use('/specifications', specificationRouter);


app.listen(3002, () => console.log("Server Running"));
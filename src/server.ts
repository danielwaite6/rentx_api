import "reflect-metadata"
import express, { Response, Request, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';
import './shared/container';


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

});


app.listen(3002, () => console.log("Server Running"));
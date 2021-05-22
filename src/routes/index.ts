import { Router } from 'express';
import commentarysRouter from './commentarys.routes';

const routes = Router();

routes.use('/commentarys', commentarysRouter);

export default routes;

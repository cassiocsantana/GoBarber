import { Router } from 'express';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controller/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();
providersRouter.use(ensureAuthenticaded);

providersRouter.get('/', providersController.index);

export default providersRouter;

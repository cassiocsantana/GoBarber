import { Router } from 'express';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controller/AppointementsController';
import ProviderAppointmentsController from '../controller/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();
appointmentsRouter.use(ensureAuthenticaded);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;

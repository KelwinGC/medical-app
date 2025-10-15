import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

export const createExpressApp = (controller: ReturnType<typeof import('../controllers/AppointmentController').makeAppointmentController>): Application => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors())
  app.post('/appointments', controller.register);
  // app.get('/appointments/:id', controller.getById);
  return app;
};
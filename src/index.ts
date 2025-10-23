import { AppointmentRepository } from './ports/AppointmentRepository';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
dotenv.config();
import { AppointmentRepositoryMySQL } from './infrastructure/mysql/AppointmentRepositoryMySQL';
import { makeAppointmentController } from './controllers/AppointmentController';
import { createExpressApp } from './adapters/ExpressAdapter';
import { Context } from 'aws-lambda';
import { RegisterAppointment } from './useCases/RegisterAppointment';

(async () => {

  const repo = new AppointmentRepositoryMySQL();
  const controller = makeAppointmentController(repo);
  const app = createExpressApp(controller);

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
  
  //  export const handlerPrev = serverless(app);

})();

// export const handler = async(event: any, context:Context) => {
//   if(event.requestContext){
//     return handlerPrev(event,context)
//   }

//   if(event.Records && event.Records[0].eventSource === 'aws:sqs'){
//     console.log('Evento SQS recibido',event.Records.length,'mensajes');
//     for(const record of event.Records){
//       try {
//         const body = JSON.parse(record.body);
//         console.log('Procesando cita:', body);

//         const usecase = new RegisterAppointment(repo);
//         const appointment = await usecase.execute(body);

//       } catch (err) {
//         console.error(' Error procesando mensaje SQS:', err);
//       }
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Mensajes procesados correctamente' }),
//     };
//   }

//   console.warn('Evento desconocido:', event);
//   return { statusCode: 400, body: 'Evento no soportado' };

// }

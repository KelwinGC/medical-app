import { Request, Response } from 'express';
import { RegisterAppointment } from '../useCases/RegisterAppointment';
import { AppointmentRepository } from '../ports/AppointmentRepository';

export const makeAppointmentController = (appointmentRepository: AppointmentRepository) => {
  const register = async (req: Request, res: Response): Promise<Response> => {
    try {
      const usecase = new RegisterAppointment(appointmentRepository);
      const appointment = await usecase.execute(req.body);
      return res.status(201).json({ data: appointment.toPrimitives() });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  return {register}

}
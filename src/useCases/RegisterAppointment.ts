import { Appointment } from '../domain/entities/Appointment';
import { AppointmentRepository } from '../ports/AppointmentRepository';

interface RegisterAppointmentRequest {
  insureId: string;
  scheduleId: number;
}

export class RegisterAppointment {
  constructor(private appointmentRepository: AppointmentRepository) {}

  async execute({ insureId, scheduleId }: RegisterAppointmentRequest): Promise<Appointment> {
    
    if (!insureId || !scheduleId ) {
      throw new Error('insureId, scheduleId are required');
    }

    const appointment = new Appointment(
      0,
      scheduleId,
      insureId,
      'pending'
    );

    const generatedId = await this.appointmentRepository.save(appointment);
    appointment.id = generatedId
    return appointment;
  }
}
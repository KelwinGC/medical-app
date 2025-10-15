import { Appointment } from '../domain/entities/Appointment';

export interface AppointmentRepository {
  save(appointment: Appointment): Promise<number>;
  // findById(id: string): Promise<Appointment | null>;

}
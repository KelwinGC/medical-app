import { AppointmentRepository } from '../../ports/AppointmentRepository';
import { Appointment } from '../../domain/entities/Appointment';
import { getPool } from '../db/connection';
import { ResultSetHeader } from 'mysql2';

export class AppointmentRepositoryMySQL implements AppointmentRepository {

  private pool = getPool();

  async save(appointment: Appointment): Promise<number> {
    const sql = `INSERT INTO appointment ( insure_id, schedule_id,  status)
                 VALUES (?, ?, ?)`;
    const {  insure_id, schedule_id, status } = appointment;
    const [result] = await this.pool.execute<ResultSetHeader>(sql, [ insure_id, schedule_id, status]);
    console.log(result);
    const insertedId =  (result?result.insertId: -1)
    
    return insertedId
  }


}
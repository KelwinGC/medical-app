export interface AppointmentProps
{
  Id: number;
	 scheduleId: number;
	 insureId: number;
}

export class Appointment
{
	public id: number;
	public schedule_id: number;
	public insure_id: string;
  public status: string

	constructor (id_: number,schedule_id_: number,insure_id_: string, status_:string)
	{
		this.id = id_;
		this.schedule_id = schedule_id_;
		this.insure_id = insure_id_;
    this.status = status_;
	}

	toPrimitives(){
		return{
			id: this.id,
			scheduleId: this.schedule_id,
			insureId: this.insure_id,
			status: this.status
		}
	}

}
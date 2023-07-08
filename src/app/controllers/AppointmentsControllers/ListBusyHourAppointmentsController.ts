import {Request, response, Response} from 'express'
import { ListBusyHoursAppointmentServices } from '../../services/AppointmentsServices/ListBusyHourAppointments';

class ListBusyHourAppointmentController{
  async handle(req: Request, res: Response){

    const listBusyHourAppointmentService = new ListBusyHoursAppointmentServices();
    
     const ListBusyHourAppointment = await listBusyHourAppointmentService.execute();

    return res.json(ListBusyHourAppointment)
  }
}

export { ListBusyHourAppointmentController }
import {Request, response, Response} from 'express'
import { ListAppointmentServices } from '../../services/AppointmentsServices/ListAppointmentsService';

class ListAppointmentController{
  async handle(req: Request, res: Response){

    const listAppointmentService = new ListAppointmentServices();
    
     const ListAppointment = await listAppointmentService.execute();

    return res.json(ListAppointment)
  }
}

export { ListAppointmentController }
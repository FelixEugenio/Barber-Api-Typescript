import {Request, Response} from 'express'
import { CancelAppointmentServices } from '../../services/AppointmentsServices/CancelAppointmentervice';
import { transporter } from '../../../config/Mail/mail';
import { mailOptions } from '../../../config/Mail/mail';

class CancelAppointmentController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const cancelAppointmentService = new CancelAppointmentServices();
    
     const ListAppointment = await cancelAppointmentService .execute(id);
      
      await transporter.sendMail(mailOptions);

    return res.json(ListAppointment)
  }
}

export { CancelAppointmentController }
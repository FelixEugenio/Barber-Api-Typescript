import {Request, Response} from 'express'
import { CreateAppointmentService } from '../../services/AppointmentsServices/CreateAppointmentService';
import { CreateNotificationService } from '../../services/NotificationServices/CreateNotificationService';
import { message } from '../../messages/NotificationsMessages/NotificationsMessages';

class CreateAppointmentController{
  async handle(req: Request, res: Response){

    const { collaborator_id,service_id,hour_id,date } = req.body;

    const user_id = req.user_id;

    const createAppointmentService = new CreateAppointmentService();

     const CreateAppointment = await createAppointmentService.execute({
      user_id,
      hour_id,
      collaborator_id,
      service_id,
      date
      });

      const createNotificationService = new CreateNotificationService();

      const CreateNotification = createNotificationService.execute({
        user_id,
        message
      })

    return res.json({
      CreateAppointment,
      CreateNotification
    })
  }
}

export { CreateAppointmentController }
import {Request, response, Response} from 'express'
import { ListNotificationServices } from '../../services/NotificationServices/ListAllNotificationsService';

class ListNotificationController{
  async handle(req: Request, res: Response){

    const ListNotificationsService = new ListNotificationServices();
    
     const ListNotificationsServices = await ListNotificationsService.execute();

    return res.json(ListNotificationsServices)
  }
}

export { ListNotificationController }
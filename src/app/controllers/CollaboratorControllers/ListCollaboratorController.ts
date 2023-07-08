import {Request, response, Response} from 'express'
import { ListCollaboratorServices } from '../../services/CollaboratorServices/ListCollaboratorService';

class ListCollaboratorController{
  async handle(req: Request, res: Response){

    const listNotificationsService = new ListCollaboratorServices();
    
     const ListCollaboratorService = await listNotificationsService.execute();

    return res.json(ListCollaboratorService)
  }
}

export { ListCollaboratorController }
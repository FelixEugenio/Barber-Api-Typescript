import {Request, Response} from 'express'
import { DeleteServiceServices } from '../../services/ServiceServices/DeleteServiceServices';

class DeleteServiceController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const deleteServiceService = new DeleteServiceServices();

    const deleteService = deleteServiceService.execute(id)
    
    return res.json(deleteService )
  }
}

export { DeleteServiceController }
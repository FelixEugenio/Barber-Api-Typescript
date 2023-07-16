import {Request, Response} from 'express'
import { DeleteDurationServices } from '../../services/DurationServices/DeleteDurationServices';

class DeleteDurationController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const deletedurationService = new DeleteDurationServices();

    const deleteduration = deletedurationService.execute(id)
    
    return res.json(deleteduration)
  }
}

export { DeleteDurationController }
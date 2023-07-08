import {Request, Response} from 'express'
import { DeleteHourServices } from '../../services/HoursServices/DeleteHourService';

class DeleteHourController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const deletehourService = new DeleteHourServices();

    const deletehour = deletehourService.execute(id)
    
    return res.json(deletehour)
  }
}

export { DeleteHourController }
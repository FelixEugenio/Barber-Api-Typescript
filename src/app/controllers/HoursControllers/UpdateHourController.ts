import {Request, Response} from 'express'
import { UpdateHourService } from '../../services/HoursServices/UpdateHourService';

class UpdateHourController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const { hour} = req.body;

    const updateHourService = new UpdateHourService();

    const UpdateHour = await updateHourService.execute({
      hour,
      id
    });

    return res.json(UpdateHour)
  }
}

export { UpdateHourController }
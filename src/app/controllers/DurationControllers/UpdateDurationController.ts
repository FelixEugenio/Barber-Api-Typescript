import {Request, Response} from 'express'
import { UpdateDurationService } from '../../services/DurationServices/UpdateDurationService';

class UpdateDurationController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const {duration} = req.body;

    const updateDurationService = new UpdateDurationService();

    const UpdateDuration = await updateDurationService.execute({
      duration,
      id
    });

    return res.json(UpdateDuration)
  }
}

export { UpdateDurationController }
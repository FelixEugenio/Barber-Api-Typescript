import {Request, Response} from 'express'
import { CreateDurationService } from '../../services/DurationServices/CreateDurationServices';

class CreateDurationController{
  async handle(req: Request, res: Response){

    const  {duration} = req.body;

    const createDurationService = new CreateDurationService();
    
     const CreateDuration = await createDurationService.execute({
      duration,
      });

    return res.json(CreateDuration)
  }
}

export { CreateDurationController }
import {Request, Response} from 'express'
import { CreateHourService } from '../../services/HoursServices/CreateHourService';

class CreateHourController{
  async handle(req: Request, res: Response){

    const  {hour} = req.body;

    const createHourService = new CreateHourService();
    
     const Createhour = await createHourService.execute({
      hour,
      });

    return res.json(Createhour)
  }
}

export { CreateHourController }
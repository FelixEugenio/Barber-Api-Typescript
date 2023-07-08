import {Request, response, Response} from 'express'
import { ListHourServices } from '../../services/HoursServices/ListHourService';

class ListHourController{
  async handle(req: Request, res: Response){

    const ListHourService = new ListHourServices();
    
     const ListHoursService = await ListHourService.execute();

    return res.json(ListHoursService)
  }
}

export { ListHourController }
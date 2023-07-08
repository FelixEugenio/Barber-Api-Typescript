import {Request, response, Response} from 'express'
import { ListServiceServices } from '../../services/ServiceServices/ListServiceServices';

class ListServiceController{
  async handle(req: Request, res: Response){

    const ListService = new ListServiceServices();
    
     const ListAllServices = await ListService.execute();

    return res.json(ListAllServices)
  }
}

export { ListServiceController }
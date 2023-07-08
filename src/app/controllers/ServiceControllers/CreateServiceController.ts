import {Request, response, Response} from 'express'
import { CreateServiceServices } from '../../services/ServiceServices/CreateServiceServices';

class CreateServiceController{
  async handle(req: Request, res: Response){

    const { service, price, duration } = req.body;

    const createService = new CreateServiceServices();

        const {originalname, filename: banner} = req.file;
    
     const user = await createService.execute({
      service,
      price,
      duration,
      banner
      });

    return res.json(user)
  }
}

export { CreateServiceController }
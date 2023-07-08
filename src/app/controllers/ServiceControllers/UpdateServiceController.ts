import {Request, Response} from 'express'
import { UpdateServiceServices } from '../../services/ServiceServices/UpdateServiceServices';

class UpdateServiceController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const { service,duration,price} = req.body;

    const updateServiceServices = new UpdateServiceServices();
    
    const {originalname,filename:banner} = req.file;

    const UpdateService = await updateServiceServices .execute({
        service,
        banner,
        duration,
        price,
        id
    });

    return res.json(UpdateService)
  }
}

export { UpdateServiceController }
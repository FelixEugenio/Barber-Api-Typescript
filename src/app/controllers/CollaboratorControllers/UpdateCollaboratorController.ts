import {Request, Response} from 'express'
import { UpdateCollaboratorService } from '../../services/CollaboratorServices/UpdateCollaboratorService';

class UpdateCollaboratorController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const { name, email, phone , address} = req.body;

    const updateCollaboratorService = new UpdateCollaboratorService();

    const {originalname, filename: banner} = req.file;

    const UpdateCollaborator = await updateCollaboratorService.execute({
      name,
      email,
      phone,
      banner,
      address,
      id
      
    });

    return res.json(UpdateCollaborator)
  }
}

export { UpdateCollaboratorController }
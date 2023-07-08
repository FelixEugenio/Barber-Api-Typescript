import {Request, response, Response} from 'express'
import { CreateCollaboratorService } from '../../services/CollaboratorServices/CreateCollaborator';

class CreateCollaboratorController{
  async handle(req: Request, res: Response){

    const { name,email,address,phone } = req.body;

    const createCollaboratorService = new CreateCollaboratorService();

    const {originalname,filename: banner} = req.file;

     const CreateCollaborator = await createCollaboratorService.execute({
      name,
      email,
      address,
      phone,
      banner
      });

    return res.json(CreateCollaborator)
  }
}

export { CreateCollaboratorController }
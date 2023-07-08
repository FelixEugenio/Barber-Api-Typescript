import {Request, Response} from 'express'
import { DeleteCollaboratorServices } from '../../services/CollaboratorServices/DeleteCollaboratorService';


class DeleteCollaboratorController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const deleteCollaboratorService = new DeleteCollaboratorServices();

    const deleteCollaborator = deleteCollaboratorService.execute(id)
    
    return res.json(deleteCollaborator)
  }
}

export { DeleteCollaboratorController }
import {Request, Response} from 'express'
import { DeleteUserServices } from '../../services/UserServices/DeleteUserService';

class DeleteUserController{
  async handle(req: Request, res: Response){

    const id = req.params.id;

    const deleteUserService = new DeleteUserServices();

    const deleteUser = deleteUserService.execute(id)
    
    return res.json(deleteUser )
  }
}

export { DeleteUserController }
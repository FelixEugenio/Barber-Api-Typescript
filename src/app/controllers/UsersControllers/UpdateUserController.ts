import {Request, response, Response} from 'express'
import { UpdateCreateUserService } from '../../services/UserServices/UpdateUserService';

class UpdateUserController{
  async handle(req: Request, res: Response){

    const { name, email, password,phone ,} = req.body;
    
    const user_id = req.user_id;

     const {originalname, filename: banner} = req.file;

    const createUserService = new UpdateCreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      phone,
      banner,
      user_id
    });

    return res.json(user)
  }
}

export { UpdateUserController }
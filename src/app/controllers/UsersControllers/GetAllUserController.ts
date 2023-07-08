import {Request, response, Response} from 'express'
import { GetAllUserService } from '../../services/UserServices/GetAllUsersService';

class GetAllUserController{
  async handle(req: Request, res: Response){

    const GetAllUserServices = new GetAllUserService();

    const GetAllUsers = await GetAllUserServices.execute();

    return res.json(GetAllUsers)
  }
}

export { GetAllUserController }
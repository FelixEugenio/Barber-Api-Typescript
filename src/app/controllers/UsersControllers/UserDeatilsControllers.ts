import {Request, Response} from 'express';
import {  UserDetailsService } from '../../services/UserServices/UserDetailsService';

class UserDetailsController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;

    const userDetailsService = new UserDetailsService();

    const UserDetails = await userDetailsService.execute(user_id)

    return res.json(UserDetails);

  }
}

export { UserDetailsController }
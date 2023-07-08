import prismaClient from '../../../prisma'
import { UpdateUserRequest } from '../../interfaces/UserInterface/UpdateUserInterface'

class UpdateCreateUserService{
  async execute({ name, email, password,phone,banner,user_id }: UpdateUserRequest){

    const UpdateUser = await prismaClient.user.update({
        where:{
             id:user_id
        },
        data:{
            name:name,
            email:email,
            password:password,
            phone:phone,
            banner:banner
        },
        select:{
            id:true,
            name:true,
            email:true,
            phone:true,
            banner:true
        }
    })


    return UpdateUser;
  }
}

export { UpdateCreateUserService }
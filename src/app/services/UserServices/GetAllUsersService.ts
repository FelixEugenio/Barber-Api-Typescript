import prismaClient from '../../../prisma'
import { UpdateUserRequest } from '../../interfaces/UserInterface/UpdateUserInterface'

class GetAllUserService{
  async execute(){

    const GetAllUsers = await prismaClient.user.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            banner:true
        }
    })

    return GetAllUsers;
  }
}

export { GetAllUserService }
import prismaClient from '../../../prisma'
import { hash } from 'bcryptjs'
import { UserRequest } from '../../interfaces/UserInterface/UserRequest'

class CreateUserService{
  async execute({ name, email, password,phone }: UserRequest){

    // verificar se ele enviou um email
    if(!email){
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(userAlreadyExists){
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash,
        phone:phone
      },
      select:{
        id: true,
        name: true,       
        email: true,
        phone:true
      }
    })


    return user;
  }
}

export { CreateUserService }
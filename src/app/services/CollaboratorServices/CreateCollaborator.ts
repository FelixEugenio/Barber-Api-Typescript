import prismaClient from '../../../prisma'
import { hash } from 'bcryptjs'
import { CollaboratorRequest } from '../../interfaces/CollaboratorInterface/CollaboratorRequest'

class CreateCollaboratorService{
  async execute({ name, email, address,phone,banner }: CollaboratorRequest){

    // verificar se ele enviou um email
    if(!email){
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const CheckifCollaboratorAlreadyExists = await prismaClient.collaborator.findFirst({
      where:{
        email: email
      }
    })

    if(CheckifCollaboratorAlreadyExists){
      throw new Error("User already exists")
    }


    const CreateCollaborator = await prismaClient.collaborator.create({
      data:{
        name: name,
        email: email,
        address:address,
        phone:phone,
        banner:banner
      },
      select:{
        id: true,
        name: true,       
        email: true,
        phone:true,
        banner:true
      }
    })

    return CreateCollaborator;
  }
}

export { CreateCollaboratorService }
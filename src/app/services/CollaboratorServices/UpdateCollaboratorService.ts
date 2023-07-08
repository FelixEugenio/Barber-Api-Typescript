import prismaClient from '../../../prisma'
import { UpdateCollaboratorRequest } from '../../interfaces/CollaboratorInterface/ICollaboratorRequest';

class UpdateCollaboratorService{
  async execute({name,email,address,phone,id,banner}: UpdateCollaboratorRequest){

    const UpdateCollaborator = await prismaClient.collaborator.update({
        where:{
             id:id
        },
        data:{
            name:name,
            email:email,
            phone:phone,
            address:address,
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

    return UpdateCollaborator;
  }
}

export { UpdateCollaboratorService }
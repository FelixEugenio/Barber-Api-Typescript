import prismaClient from "../../../prisma";

class ListCollaboratorServices{
    async execute(){

        const ListCollaboratorsServices = await prismaClient.collaborator.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                address:true,
                phone:true
            }
        })

        return ListCollaboratorsServices;
    }
}

export {ListCollaboratorServices}
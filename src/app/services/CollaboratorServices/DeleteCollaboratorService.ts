import prismaClient from "../../../prisma";

class DeleteCollaboratorServices{
    async execute(id:string){

        const DeleteCollaborator = await prismaClient.collaborator.delete({
            where:{
                id:id
            },
        })

        return DeleteCollaborator;
    }
}

export {DeleteCollaboratorServices}
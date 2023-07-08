import prismaClient from "../../../prisma";

class DeleteServiceServices{
    async execute(id:string){

        const DeleteService = await prismaClient.service.delete({
            where:{
                id:id
            },
        })

        return DeleteService;
    }
}

export {DeleteServiceServices}
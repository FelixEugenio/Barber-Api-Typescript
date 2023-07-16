import prismaClient from "../../../prisma";

class DeleteDurationServices{
    async execute(id:string){

        const DeleteDuration = await prismaClient.duration.delete({
            where:{
                id:id
            },
        })

        return DeleteDuration;
    }
}

export {DeleteDurationServices}
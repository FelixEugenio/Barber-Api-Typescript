import prismaClient from "../../../prisma";

class DeleteHourServices{
    async execute(id:string){

        const DeleteHour = await prismaClient.hour.delete({
            where:{
                id:id
            },
        })

        return DeleteHour;
    }
}

export {DeleteHourServices}
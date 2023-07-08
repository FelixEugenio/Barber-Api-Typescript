import prismaClient from "../../../prisma";

class DeleteUserServices{
    async execute(id:string){

        const DeleteUser = await prismaClient.hour.delete({
            where:{
                id:id
            },
        })

        return DeleteUser;
    }
}

export {DeleteUserServices}
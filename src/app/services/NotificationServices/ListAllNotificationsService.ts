import prismaClient from "../../../prisma";

class ListNotificationServices{
    async execute(){

        const ListNotificationServices = await prismaClient.notification.findMany({
            select:{
                id:true,
                message:true,
                user_id:true,
            }
        })

        return ListNotificationServices;
    }
}

export {ListNotificationServices}
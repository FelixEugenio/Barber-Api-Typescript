import prismaClient from "../../../prisma";

class ListHourServices{
    async execute(){

        const ListHourServices = await prismaClient.hour.findMany({
            select:{
                id:true,
                hour:true,
            }
        })

        return ListHourServices;
    }
}

export {ListHourServices}
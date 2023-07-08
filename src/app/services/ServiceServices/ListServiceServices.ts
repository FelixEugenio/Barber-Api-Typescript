import prismaClient from "../../../prisma";

class ListServiceServices{
    async execute(){

        const ListServices = await prismaClient.service.findMany({
            select:{
                id:true,
                service:true,
                duration:true,
                price:true,
                banner:true
            }
        })

        return ListServices;
    }
}

export {ListServiceServices}
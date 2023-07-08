import prismaClient from "../../../prisma";
import { ServiceRequest } from "../../interfaces/ServiceInterface/ServiceRequest";

class CreateServiceServices{
    async execute({service,price,duration,banner}:ServiceRequest){

        const checkIfServiceAlreadyExis = await prismaClient.service.findFirst({
            where:{
                service:service
            }
        })

        if(checkIfServiceAlreadyExis){
             throw new Error("Service Already Exists");
        }

        const CreateService = await prismaClient.service.create({
            data:{
                service:service,
                price:price,
                duration:duration,
                banner:banner 
            },
            select:{
                id:true,
                price:true,
                duration:true,
                banner:true,
                service:true
            }
        })

        return CreateService;

        return ;

    }

}

export {CreateServiceServices}
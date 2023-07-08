import prismaClient from '../../../prisma'
import { UpdateServiceRequest } from '../../interfaces/ServiceInterface/iUpdateServiceServices';

class UpdateServiceServices{
  async execute({service,duration,banner,id ,price}:UpdateServiceRequest){

    const UpdateService = await prismaClient.service.update({
        where:{
             id:id
        },
        data:{
            service:service,
            duration:duration,
            banner:banner,
            price:price
        },
        select:{
            id:true,
            service:true,
            duration:true,
            price:true,
            banner:true
        }
    })

    return UpdateService;
  }
}

export { UpdateServiceServices }
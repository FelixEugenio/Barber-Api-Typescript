import prismaClient from '../../../prisma'
import { UpdateHourRequest } from '../../interfaces/HoursInterface/IHourRequest';

class UpdateHourService{
  async execute({hour,id }:UpdateHourRequest){

    const UpdateHour = await prismaClient.hour.update({
        where:{
             id:id
        },
        data:{
            hour:hour
        },
        select:{
            id:true,
            hour:true,
        }
    })


    return UpdateHour;
  }
}

export { UpdateHourService }
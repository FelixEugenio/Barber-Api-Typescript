import prismaClient from '../../../prisma'
import { UpdateDurationRequest } from '../../interfaces/DurationInterface/Iduration';
import { UpdateHourRequest } from '../../interfaces/HoursInterface/IHourRequest';

class UpdateDurationService{
  async execute({duration,id }:UpdateDurationRequest){

    const UpdateDuration = await prismaClient.duration.update({
        where:{
             id:id
        },
        data:{
            duration:duration
        },
        select:{
            id:true,
            duration:true,
        }
    })

    return UpdateDuration;
  }
}

export { UpdateDurationService }
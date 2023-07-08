import prismaClient from '../../../prisma'
import { HourRequest } from '../../interfaces/HoursInterface/HourRequest'

class CreateHourService{
  async execute({ hour }: HourRequest){

    //Verificar se esse email já está cadastrado na plataforma
    const HourAlreadyExists = await prismaClient.hour.findFirst({
      where:{
        hour: hour
      }
    })

    if(HourAlreadyExists){
      throw new Error("Hour already exists")
    }

    const CreateHour = await prismaClient.hour.create({
      data:{
        hour:hour
      },
      select:{
        id: true,
        hour:true
      }
    })

    return CreateHour;
  }
}

export { CreateHourService }
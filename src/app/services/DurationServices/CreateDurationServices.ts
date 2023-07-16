import prismaClient from '../../../prisma'

class CreateDurationService{
  async execute({ duration }){

    //Verificar se esse email já está cadastrado na plataforma
    const HourAlreadyExists = await prismaClient.duration.findFirst({
      where:{
        duration: duration
      }
    })

    if(HourAlreadyExists){
      throw new Error("Hour already exists")
    }

    const CreateHour = await prismaClient.duration.create({
      data:{
        duration:duration
      },
      select:{
        id: true,
        duration:true
      }
    })

    return CreateHour;
  }
}

export { CreateDurationService }
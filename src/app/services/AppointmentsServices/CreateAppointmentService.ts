import { AppointmentRequest } from "../../interfaces/AppointmentsInterface/AppointmentRequest";
import prismaClient from '../../../prisma'

class CreateAppointmentService{
  async execute({ user_id,service_id,collaborator_id,hour_id,date }: AppointmentRequest){

    //Verificar se esse email já está cadastrado na plataforma
    const CheckifAppointmentAlreadyExists = await prismaClient.appointment.findFirst({
      where:{
        user_id:user_id
      }
    })

    if(CheckifAppointmentAlreadyExists){
      throw new Error("Appointment already exists")
    }

    const CreateCollaborator = await prismaClient.appointment.create({
      data:{
        user_id,
        service_id,
        collaborator_id,
        hour_id,
        date:date
      },
      include:{
        user:true,
        service:true,
        collaborator:true,
        hour:true

      }
    })

    return CreateCollaborator;
  }
}

export { CreateAppointmentService }
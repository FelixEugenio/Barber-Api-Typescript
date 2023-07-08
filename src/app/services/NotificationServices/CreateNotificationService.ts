import prismaClient from '../../../prisma'
import { NotifcationRequest } from '../../interfaces/NotificationInterface/NotificationRequest';

class CreateNotificationService{
  async execute({user_id,message}:NotifcationRequest){

    const CheckIfUserExists = await prismaClient.user.findFirst({
      where:{
        id:user_id
      }
    })

    if(!CheckIfUserExists){
    throw new Error('User Not Found')
    }

    const CreateNotification = await prismaClient.notification.create({
      data:{
        user_id:user_id,
        message:message
      },
      select:{
        id: true,
        message:true,
        user_id:true
      }
    })

    return CreateNotification;
  }
}

export { CreateNotificationService }
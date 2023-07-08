import prismaClient from "../../../prisma";

class ListAppointmentServices{
    async execute(){

        const ListAppointmentServices = await prismaClient.appointment.findMany({
            select:{
                id:true,
                user_id:true,
                service_id:true,
                collaborator_id:true,
                hour_id:true,
                date:true
            }
        })

        return ListAppointmentServices;
    }
}

export {ListAppointmentServices}
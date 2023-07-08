import prismaClient from "../../../prisma";

class CancelAppointmentServices{
    async execute(id:string){

        const CancelAppointment = await prismaClient.appointment.delete({
            where:{
                id:id
            },
        })

        return CancelAppointment;
    }
}

export {CancelAppointmentServices}
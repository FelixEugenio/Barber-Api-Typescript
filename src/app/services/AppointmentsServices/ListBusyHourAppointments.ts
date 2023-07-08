import prismaClient from "../../../prisma";

class ListBusyHoursAppointmentServices{
    async execute(){

        const HoursWithAppointments = await prismaClient.appointment.findMany({
           
            select:{
                id:true,
                hour_id:true
            },
        })

        const  ScheduledHours = HoursWithAppointments.map((agendamento)=> agendamento.hour_id);

        return ScheduledHours;
    }
}

export {ListBusyHoursAppointmentServices}
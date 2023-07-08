import prismaClient from "../../../prisma";

class UserDetailsService{
    async execute(user_id:string){

        const User = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            include:{
                appointment:true
            }
        })

        return User;

    }

}

export {UserDetailsService}
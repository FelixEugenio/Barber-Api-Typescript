interface UserRequest{
    name: string;
    email: string;
    password: string;
    phone:string
    isAdmin?:boolean
    banner?:string
  }

  export {UserRequest}
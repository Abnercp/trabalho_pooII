import { Request, Response } from "express"
import { createUser } from "./services/CreateUser"

export function helloWorld(req: Request,res: Response) {

    const user = createUser({
        name: 'Abner Pereira',
        email: 'aabnerpereira@gmail.com',
        password: '1234'
    })


    return res.json({message : "Hello World"})
    
}
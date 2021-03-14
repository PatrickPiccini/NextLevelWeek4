import {Request,Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";


class UserController{
    async create(request: Request, response: Response){
        const {name, email} = request.body;
        
        const unsersRepository = getRepository(User);


        const userAreadyExtists = await unsersRepository.findOne({
            email
        });

        if(userAreadyExtists) {
            return response.status(400).json({
                error:"User already existis!"
                
                
            })
        }


        const user = unsersRepository.create({
            name, email
        })

        await unsersRepository.save(user);

        return response.json(user);
    }
}

export{ UserController };

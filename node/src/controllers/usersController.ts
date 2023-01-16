import { Request, Response } from "express";
import UsersRepository from "../repositories/usersRepository"
import CreateUser from "../requests/CreateUser";

const usersRepository = new UsersRepository();

export const getAll  = (req: Request,res: Response) => {
    usersRepository.getAll().then(users => {
        res.status(200).send(users)
    }).catch(err => res.status(500).send())
}

export const getById = (req: Request,res: Response) => {
    usersRepository.getById(req.params.id)
    .then(user => {
        res.status(200).end(JSON.stringify(user))
    })
    .catch(err => {
        if(err == 404){
            res.status(err).send()
        }
        res.status(500).send()
    })
}

export const deleteUser = (req: Request,res: Response) => {
    
    usersRepository.delete(req.params.id)
    .then(() => {
        res.status(204).send()
    })
    .catch(err => {
        if(err == 404){
            res.status(err).send()
        }
        res.status(500).send()
    })
}

export const create = (req: Request,res: Response) => {
    console.log(req.body)
    try {
        const createUser = new CreateUser(req.body.username,req.body.age,req.body.hobbies)
        console.log(createUser)
    } 
    catch(err)
    {
        console.log(err)
    }
}
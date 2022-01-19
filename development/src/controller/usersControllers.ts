import {Request , Response, NextFunction} from 'express'

const checkConnection_Controller = (req : Request , res: Response, next: NextFunction) => {
    res.send("valid response from userRouter")
}

const createUser_Controller = (req : Request , res: Response, next: NextFunction) => {
    res.send(req.body)
}

const getUser_Controller = (req : Request , res: Response, next: NextFunction) => {
    res.send(req.body)
}

const getAllUsers_Controller = (req : Request , res: Response, next: NextFunction) => {
    
}

const deleteUser_Controller = (req : Request , res: Response, next: NextFunction) => {
    
}

export{checkConnection_Controller, getUser_Controller, createUser_Controller, getAllUsers_Controller, deleteUser_Controller}
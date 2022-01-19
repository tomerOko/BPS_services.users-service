import express, { NextFunction, Request, Response } from 'express'
import { checkConnection_Controller, getUser_Controller , } from '../controller/usersControllers'
const userRouter = express.Router()

userRouter.get("/", checkConnection_Controller)

userRouter.post("/getUser", getUser_Controller)

export {userRouter as userRoutes}
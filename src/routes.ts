import express from "express";
import {userRoutes} from './users/routes/usersRoutes'

const topRouter = express.Router()
topRouter.use('/users', userRoutes);

export {topRouter}
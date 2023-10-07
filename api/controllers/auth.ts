import express from 'express'
import ErrorHandler, { errorMiddleware } from '../middlewares/Error'
import { User } from '../models/User.entity'
import connectDB from '../../config/ormconfig'

//login
export const login = async (req: express.Request, res: express.Response) => {
  try {
    const email_id = req.body.email
    // const user = await getRepository(User).find( { where: {email: email_id }} )

    const userRepo = connectDB.getRepository(User)
    const user = await userRepo.find({ where: { email: email_id } }).catch(err => {
      console.log(err)
      errorMiddleware(new ErrorHandler('Something went wrong', 400), res)
    })

    if (!email_id || email_id == '') {
      errorMiddleware(new ErrorHandler('Email cannot be blank', 400), res)
    }
    res.send(user)
  } catch (err) {
    console.log(err)
    errorMiddleware(new ErrorHandler(err, 400), res)
  }
}

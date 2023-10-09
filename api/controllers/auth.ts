import express from 'express'
import ErrorHandler, { errorMiddleware } from '../middlewares/Error'
import { User } from '../models/User.entity'
import otpGenerator from 'otp-generator'
import connectDB from '../../config/ormconfig'
import { Otp } from '../models/Otp.entity'
import { getManager } from 'typeorm'
import { CreateOTPInput } from '../models/Otp.interface'

//login
export const login = async (req: express.Request, res: express.Response) => {
  try {
    const email_id = req.body.email

    if (!email_id || email_id == '') {
      errorMiddleware(new ErrorHandler('Email cannot be blank', 400), res)
    }
    const userRepo = connectDB.getRepository(User)
    const user = await userRepo.findOne({ where: { email: email_id } }).catch(err => {
      console.log(err)
      return errorMiddleware(new ErrorHandler(), res)
    })

    if (!user) {
      return errorMiddleware(new ErrorHandler('User not found', 400), res)
    }

    //Generate OTP
    const code = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    const now = new Date()
    const expiration_time = AddMinutesToDate(now, 10)
    console.log('This is otp', code)

    //Create OTP instance in DB
    const newOTP = new Otp()
    const createOTPInstance: CreateOTPInput = {
      code: code,
      expiresAt: expiration_time
    }
    newOTP.prepareToCreate(createOTPInstance)
    const otp_instance = await connectDB.manager.save(newOTP)

    console.log('otp', otp_instance)

    // Encrypt the details object

    res.send(otp_instance)
  } catch (err) {
    console.log(err)
    return errorMiddleware(new ErrorHandler(err, 400), res)
  }
}

// To add minutes to the current time
function AddMinutesToDate(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000)
}

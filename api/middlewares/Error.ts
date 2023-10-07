import express from 'express'

export default class ErrorHandler extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export const errorMiddleware = (err: ErrorHandler, res: express.Response) => {
  err.message = err.message || 'Internal Server Error'
  err.statusCode = err.statusCode || 500

  return res.status(err.statusCode).json({
    success: false,
    message: err.message
  })
}

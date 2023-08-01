import express from 'express';
import ErrorHandler, { errorMiddleware } from "../middlewares/Error";

//login
export const login = async (req: express.Request , res: express.Response) => {
    var type = "";
    console.log("called")
    try {
        const email_id = req.body.email;

        if (!email_id || email_id == "") {
            errorMiddleware(new ErrorHandler("Email cannot be blank", 400), res)
        }

    }

    catch (err) {
        errorMiddleware(new ErrorHandler(err.message, 400), res)
    }

};


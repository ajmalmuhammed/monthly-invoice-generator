
import express from 'express';
import dotenv from "dotenv";
import * as bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth'

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 8080;


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api',authRoutes);


app.listen(port,()=>{
    console.log("Server has started on ",port);
});


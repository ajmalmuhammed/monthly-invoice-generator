
import express from 'express';
import dotenv from "dotenv";

import * as bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 8080;



app.listen(port,()=>{
    console.log("Server has started on ",port);
});


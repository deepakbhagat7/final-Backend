import express from "express"

import cookieParser from "cookie-parser"
// cookie pareser user ka browser se cookies ka acces kr lu or ispe crud operations v kr lun.....bas itna he kaam hai cookie parser ka
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// data can be come in multiple fromat such as url, Json format, file etc..lets look each one by one
//1.  recived from json
app.use(express.json({limit:"16kb"}))
// 2. recived from url---the problem with url is that some url uses deep%20bhagat or some deep+bhagat like these..but express is capable for handeling these things
app.use(express.urlencoded({extended:true, limit :"16kb"}))
// /3. handling pdf 
app.use(express.static("public"))

app.use(cookieParser())


// routes import
import userRouter from './routes/user.routes.js' 

// routes declaration -- it will take you to user routes.js where you want to tell what should this do
app.use("/api/v1/users", userRouter)

// app.use("/users", userRouter) not a good practice


export {app}
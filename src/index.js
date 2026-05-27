import express from "express"
import dotenv from "dotenv"
import router from "./router/index.js"
dotenv.config()
const port =process.env.PORT 
const app=express()

app.get("/",(req,res)=>{
    res.send("hello world")
})


app.use("/api/v1",router)

app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})  
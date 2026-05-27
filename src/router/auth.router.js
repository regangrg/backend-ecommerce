
import express from "express"
const router=express.Router()
import {loginController} from "../controller/auth.controller.js"

router.get("/login",loginController)

router.get("/register",(req,res)=>{
res.send("this is from register ")
})

export default router



import express from "express"
const router=express.Router()

router.get("/",(req,res)=>{
res.send("frpm product")
})


export default router
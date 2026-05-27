import express from "express"
const router=express.Router()
import authRouter from "./auth.router.js"
import productRouter from "./product.router.js"

const allroutes=[
    {
        path:"/auth",
        router:authRouter
    },
     {
        path:"/product",
        router:productRouter
    }
]



allroutes.map((item)=>{
router.use(`${item.path}`,item.router)
})



export default router
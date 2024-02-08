const express=require("express")
const mobilemodel=require("../models/mobileModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let mobil=mobilemodel(data)
    let result=await mobil.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await mobilemodel.find()
    res.json(data)
})

module.exports=router
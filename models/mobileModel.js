const mongoose=require("mongoose")

const mobileschema=new mongoose.Schema(
    {
        mobileBrand:String,
        mobileModel:String,
        mobileComplaint:String,
        customerName:String,
        customerNum:String
    }
)

module.exports=mongoose.model("mobile",mobileschema)
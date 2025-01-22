import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name:{type:String},
    brand:{type:String},
    cc:{type:String},
    fuel_type:{type:String},
    milage:{type:String},
    colour:{type:String},
    seat:{type:String},
    profile:{type:Array},
})

export default mongoose.model.Cars||mongoose.model("Car",carSchema)
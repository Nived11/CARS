import mongoose from "mongoose";

export default async function connection(){
    try{
        const db=await mongoose.connect(process.env.DB_URL+process.env.DB_NAME);
        console.log("Database Created...");
       

        return db;
    }
    catch(error){
        console.log(error);
    }
}
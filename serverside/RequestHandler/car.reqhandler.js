import carSchema from "../models/car.model.js"
export async function addCar(req, res) {
    const { name, brand, cc, fuel_type, milage, colour,seat,profile } = req.body;
    console.log(name, brand, cc, fuel_type, milage, colour,seat);
    await carSchema.create({name, brand, cc, fuel_type, milage, colour,seat,profile}).then(()=>{
        res.status(200).send({msg:"successfully created"})
    }).catch((error)=>{
        res.status(500).send({error})
    })
}


export async function Home(req,res){
    try{
        console.log("end point");

        console.log(req.car);
        const car=await carSchema.findOne({_id});
        res.status(200).send({username:user.username,profile:user.profile})  
    }catch(error){
        res.status(400).send({error})
    }
}
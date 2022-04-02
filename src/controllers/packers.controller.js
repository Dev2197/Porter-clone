const express =require("express")
const path = require("path");

const Packers = require("../models/packers.models")



const router = express.Router();

router.post("/", async(req,res)=>{
    try {
       
           
        let data = await Packers.create(req.body);
            // city : req.body.city,
            // Name : req.body.yourName,
            // phoneNumber : req.body.phoneNumber,
            // movingFrom : req.body.movingFrom,
            // movingTo : req.body.movingTo,
            // shiftingDate: req.body.shiftingDate
        
        

        console.log(data)


        // return res.status(201).send(data);
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:error.message})
        
    }
})



module.exports = router;
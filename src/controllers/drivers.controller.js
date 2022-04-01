const express =require("express")


const Drivers = require("../models/drivers.model")





const router = express.Router();

router.post("/", async(req,res)=>{
    try {
       
           
        let driver = await Drivers.create(req.body)
            // Name : req.body.name,
            // phoneNumber : req.body.phoneNumber,
            // city  : req.body.city ,
            // vehicle : req.body.vehicle,
            // source : req.body.source
            
        // })
        

        console.log(driver)
        // return res.status(201).send(data);
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:error.message})
        
    }
})



module.exports = router;
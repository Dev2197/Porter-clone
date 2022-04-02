const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")





const packersController = require("./controllers/packers.controller")
const driverController = require("./controllers/drivers.controller")



const app = express()



app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

app.use(cors());





app.use("/packers", packersController)
app.use("/drivers", driverController)


module.exports = app;
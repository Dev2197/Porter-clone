const express = require("express")
const bodyParser = require('body-parser')





const packersController = require("./controllers/packers.controller")



const app = express()



app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())





app.use("/packers", packersController)


module.exports = app;

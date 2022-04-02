const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const path = require('path');




const packersController = require("./controllers/packers.controller")
const driverController = require("./controllers/drivers.controller")



const app = express()



app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

app.use(cors());





app.use("/packers", packersController)
app.use("/drivers", driverController)

app.use(express.static(__dirname + '/Frontend'));
app.get('/porter', function(req, res) {
  res.sendFile(path.join(__dirname , "/Frontend/index.html"));
});


module.exports = app;

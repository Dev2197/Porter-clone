const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const packersSchema = new mongoose.Schema({
    Name : {type:String, required:true},
    phoneNumber : {type:String, required:true},
    city : {type:String, required:true},
    vehicle: {type:String, required:true},
    source : {type:String, required:true}
},{
    versionKey:false,
    timestamps:true
}
);


module.exports = mongoose.model("drivers",packersSchema);
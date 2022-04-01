const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const packersSchema = new mongoose.Schema({
    city : {type:String, required:true},
    Name : {type:String, required:true},
    phoneNumber : {type:Number, required:true},
    movingFrom : {type:String, required:true},
    movingTo : {type:String, required:true},
    shiftingDate : {type:Date, required:true}
},{
    versionKey:false,
    timestamps:true
}
);


module.exports = mongoose.model("packers",packersSchema);
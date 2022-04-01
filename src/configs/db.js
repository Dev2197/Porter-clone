const mongoose = require("mongoose");

let password = "porter123"
let db = "PORTER"


module.exports = ()=>{
    return mongoose.connect(`mongodb+srv://porter:${password}@cluster0.wumdf.mongodb.net/${db}?retryWrites=true&w=majority`)
}


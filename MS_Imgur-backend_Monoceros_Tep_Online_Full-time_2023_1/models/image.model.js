const mongoose = require("mongoose")

let imageSchema = new mongoose.Schema({
    name:String,
    img:{
        data:Buffer,
        contentType:String
    }
})

module.exports = mongoose.model("image",imageSchema)
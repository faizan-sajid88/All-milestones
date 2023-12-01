const image = require("../models/image.model")

exports.createImage = (req,res)=>{
    let {name,data,contentType} = req.body

    let newImage = new image({
        name,
        img:{
            data:Buffer.from(data, "base64"),
            contentType
        }
    })

    newImage.save((error, image)=>{
        if(error){
            console.log("somethis is wrong")
        }
        res.status(201).json(image)
    })

}

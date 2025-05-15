let mongo = require("mongoose");

let hall_coll=mongo.Schema({
    hall_no:{
        type:String,
        required:true
    },
    no_of_booth:{
        type:String,
        required:true
    } 
})

module.exports=mongo.model("Halls",hall_coll);
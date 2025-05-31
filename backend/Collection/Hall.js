let mongo = require("mongoose");

let hall_coll=mongo.Schema({
    hall_no:{
        type:String,
        required:true
        
    },
    no_of_booth:{
        type:Number,
        required:true
    },
    events:{
        refrences:{model:"Expo_Events"},
        type:String
    }
})

module.exports=mongo.model("Halls",hall_coll);
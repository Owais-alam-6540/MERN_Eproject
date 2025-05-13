let mongo = require("mongoose");

let event_coll=mongo.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    theme:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        default:"Expo Center, Karachi"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongo.model("Expo_Events",event_coll);
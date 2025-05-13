let express=require('express');
let route=express.Router();

let fun=require("../Function/Logic")

route.post("/a_reg",fun.admin_register);
route.post("/a_log",fun.admin_login);
route.post("/a_feed",fun.feedback);
route.post("/a_cont",fun.contact);



module.exports=route
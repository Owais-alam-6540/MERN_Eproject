let express=require('express');
let route=express.Router();

let fun=require("../Function/Logic")

route.post("/a_reg",fun.admin_register);
route.get("/a_log",fun.admin_login);

module.exports=route
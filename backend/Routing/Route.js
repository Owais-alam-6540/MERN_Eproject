let express=require('express');
let route=express.Router();

let fun=require("../Function/Logic")

route.post("/a_reg",fun.admin_register);
route.post("/a_log",fun.admin_login);
route.post("/a_feed",fun.feedback);
route.get("/get_feed",fun.show_feedback);
route.delete("/del_feed/:id",fun.delete_feedback);
route.post("/a_cont",fun.contact);
route.get("/get_cont",fun.show_contact);
route.delete("/del_cont/:id",fun.delete_contact);
route.post("/a_events",fun.events);
route.get("/get_events",fun.show_events);
route.delete("/del_events/:id",fun.delete_events);

module.exports=route
let admin =require("../Collection/Admin")
let brcypt= require("bcrypt");
const {use}=require("../Routing/Route");
let jwt = require("jsonwebtoken");
require("dotenv").config()
let main_func={
    admin_register:async function(req,res){
        try {
            let{f_name,l_name,email,phone,password}=req.body;
            let check_email=await admin.findOne({email:email});
            if(check_email){
                return res.status(409).json({msg:"Email already exist"})
            }else{
                let b_pass=brcypt.hashSync(password,10)
                let admin_data=new admin({f_name,l_name,email,phone,password:b_pass})
                let save_admin=await admin_data.save();
                res.status(200).json({msg:"Admin registered successfully",data:save_admin})
            }
        } catch (error) {
            res.status(501).json({msg:error.message})
            
        }
    },
    admin_login:async function(req,res){
        try {
            let {email,password}=req.body;
            let check_email=await user.findOne({email});
            if(!check_email){
                return res.status(404).json({msg:"Email not found"})
            }
            let check_password=bcrypt.compareSync(password,check_email.password);
            if(!check_password){
                return res.status(404).json({msg:"Password is incorrect"})
            }
            let user_record=jwt.sign({id :check_email._id},process.env.SECRET_KEY,{expiresIn:"2d"});
            return res.status(201).json({msg:"Login successfully",user_record,user:{n
                :check_email.name,e:check_email.email
            }})
        } catch (error) {
            return res.status(501).json({msg:error.message})
        }
    }
}
module.exports=main_func;
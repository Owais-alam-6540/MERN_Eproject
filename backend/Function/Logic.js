let admin =require("../Collection/Admin");
let feed = require("../Collection/Feedback");
let contactUs = require("../Collection/ContactUs");
let events = require("../Collection/Events");
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
            let check_email=await admin.findOne({email});
            if(!check_email){
                return res.status(404).json({msg:"Email not found"})
            }
            let check_password=brcypt.compareSync(password,check_email.password);
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
    },

    feedback: async function(req,res) {
        try {
            let{name,email,msg}=req.body;
           
                let feedback_data=new feed({name,email,msg})
                let save_feedback= await feedback_data.save();
            res.status(200).json({msg:"Your Feedback Has Been Sent Successfully",data:save_feedback}) 
        }catch (error) {
            res.status(501).json({msg:error.message})
            
        }
    },

     show_feedback : async function (req, res) {
        try {
            let getFeedback_data = await feed.find();
            res.status(201).json(getFeedback_data);
        } catch (error) {
            res.status(501).json({msg: error.message})
        }
   },

   delete_feedback : async function (req,res) {
        try {
            let {id} = req.params;
            let find_id = await feed.findById(id);
            if (find_id) {
                    await feed.findByIdAndDelete(find_id);
                    return res.status(200).json({msg: "This User Feedback Has Been Deleted Successfully"})
            }
        } catch (error) {
            res.status(501).json({msg:error.message})
        }
   },


    contact: async function(req,res) {
        try {
            let{name,email,subject,msg}=req.body;
           
                let cont_data=new contactUs({name,email,subject,msg})
                let save_contact= await cont_data.save();
            res.status(200).json({msg:"Your Contact Message Has Been Sent Successfully",data:save_contact}) 
        }catch (error) {
            res.status(501).json({msg:error.message})
        }
    },

    show_contact : async function (req, res) {
        try {
            let getContact_data = await contactUs.find();
            res.status(201).json(getContact_data);
        } catch (error) {
            res.status(501).json({msg: error.message})
        }
   },

   delete_contact : async function (req,res) {
        try {
            let {id} = req.params;
            let find_id = await contactUs.findById(id);
            if (find_id) {
                    await contactUs.findByIdAndDelete(find_id);
                    return res.status(200).json({msg: "This User Contact Has Been Deleted Successfully"})
            }
        } catch (error) {
            res.status(501).json({msg:error.message})
        }
   },

    events: async function(req,res) {
        try {
            let{title,description,theme,location,date}=req.body;
                let events_data=new events({title,description,theme,location,date})
                let save_events= await events_data.save();
            res.status(200).json({msg:"Your Event's Data Has Been Saved Successfully",data:save_events}) 
        }catch (error) {
            res.status(501).json({msg:error.message})
        }
    },

    show_events : async function (req, res) {
        try {
            let getevents_data = await events.find();
            res.status(201).json(getevents_data);
        } catch (error) {
            res.status(501).json({msg: error.message})
        }
   },

   delete_events : async function (req,res) {
        try {
            let {id} = req.params;
            let find_id = await events.findById(id);
            if (find_id) {
                    await events.findByIdAndDelete(find_id);
                    return res.status(200).json({msg: "This Event Has Been Deleted Successfully"})
            }
        } catch (error) {
            res.status(501).json({msg:error.message})
        }
   }



}
module.exports=main_func;
import mongoose from "mongoose";
import { userSchema } from "../model/users.model.js";

const userModel =  mongoose.model('admin', userSchema);

export const adminSignUP = async(userData)=>
    {
        let newAdmin = new userModel(userData);
        let admin = await newAdmin.save(); 
        return admin;
    }

export const adminLogin = async(userData)=>
    {
        let user = await userModel.findOne({userEmail:userData.userEmail, userPassword: userData.userPassword});
        return user;
    }
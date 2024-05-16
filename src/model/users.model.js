import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
    userName:{type:String},
    userEmail:{type:String},
    userPassword:{type:String}
});
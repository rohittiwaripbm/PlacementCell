import mongoose from "mongoose";

export const companySchema = new mongoose.Schema({
    companyName : String,
    InterviewDate: Date,
    result : {
        type:String,
        enum:['pass', 'fail', 'on hold', `didn't attempt`],
        default: 'on hold'
    },
    studentId : {type:mongoose.Schema.Types.ObjectId, ref:'Student'}
})
import mongoose from "mongoose";

export const studentSchema = new mongoose.Schema({
    studentName : {type: String, required:true},
    studentBatch:{type:String, required:true},
    studentCollege:{type:String, required:true},
    studentMob:{type:String},
    studentEmail:{type:String},
    studentStatus:{type:String, 
        required:true,
        enum:["placed", "notPlaced"],
        default:"notPlaced"
    },
    dsaScore:{type:Number, 
        required:[true, "DSA marks are required"]
    },
    webDevScore:{type:Number,
        required:[true, "Web Development marks are required"]
    },
    reactScore:{type:Number,
        required:[true, "React marks are required"]
    },
    company:{
        type:String
    },
    InterviewDate:{
        type:Date
    },
    interviewResult:{
        type:String,
        enum:['pass', 'fail', 'on hold', `didn't attempt`],
        default: 'fail'
    }
    
});


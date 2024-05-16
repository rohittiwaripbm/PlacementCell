import mongoose from "mongoose";
import { studentSchema } from "../model/student.model.js";

const studentModel = mongoose.model('Student', studentSchema);

export const addStudent = async(studentDetails)=>
    {
        try {
            const newStudent = new studentModel(studentDetails);
            await newStudent.save();
            return true;
        } catch (error) {
            console.log(error.message)
            return false;
        }
    }

export const getAllStudents = async()=>
    {
        try {
            const allStudent = await studentModel.find();
            return allStudent;
        } catch (error) {
            return false;
        }
    }

import students from "../model/student.js";
import { getaddStudentModel } from "../model/student.js";

export const displayStudents = (req, res)=>
    {
        let student = students

        res.render('getStudent', { students: student });
    }

export const postDisplayStudents = (req, res)=>
    {
        console.log('came here')
        console.log(req.body);
        let name = req.body;
        getaddStudentModel(name.stuname);
        let student = students

        res.render('getStudent', { students: student });
    }

export const getaddStudent = (req, res)=>
    {
        res.render('addStudent')
    }
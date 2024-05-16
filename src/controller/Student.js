import { addStudent, getAllStudents } from "../Repo/studentRepo.js";
import { adminLogin } from "../Repo/adminRepo.js";

export const postAddStudent = async (req, res) => {
    console.log(req.body);
    // res.send('inpoststudentcontroller')
    let studentDetails = req.body;

    let result = await addStudent(studentDetails);

    if (result) {
        let students = await getAllStudents();
        // console.log(students)
        if (students) {
            return res.render("allStudent", { students: students })

        }
        else {
            return res.send('something went wrong');
        }
    }
    else {
        res.send('something went wrong');
    }
}

export const getAddStudent = (req, res) => {
    res.render('addStudent');
}

export const allStudent = async (req, res) => {
    let students = await getAllStudents();
    // console.log(students)
    if (students) {
        return res.render("allStudent", { students: students })

    }
    else {
        return res.send('something went wrong');
    }

}

export const postAllStudent = async(req, res)=>{
    console.log(req.body);
    
    let user = await adminLogin(req.body);

    if(user)
        {
            let students = await getAllStudents();
            if(students)
                {
                    return res.render('allStudent', {students:students});
                }
            else{
                    return res.render('something went wrong');
                }

        }
    else{
        res.send("invalid email or password")
    }

}
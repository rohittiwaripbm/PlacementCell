import { getAllStudents } from "../Repo/studentRepo.js";
import { adminSignUP,adminLogin } from "../Repo/adminRepo.js";

export const getSignUp = async (req, res) => {
    res.render('adminGetSignup');
}

export const postSignUp = async (req, res) => {

    res.render('adminGetLogin');
}

export const getLoginIn = async (req, res) => {
    res.render('adminGetLogin');
}

export const postLoginIn = async (req, res) => {
    console.log(req.body);
    console.log('came here')

    let result = await adminSignUP(req.body);
    if (result) {
        res.render('adminGetLogin');
    }
    else{
        res.send('something went wrong')
    }
}

export const postAllStudent = async(req, res)=>{   
    let user = await adminLogin(req.body);
    if(user)
        {
            req.session.userEmail = req.body.userEmail;
            req.session.userEmail = req.body.userEmail; 
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
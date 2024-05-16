import express from 'express';

// import { displayStudents,getaddStudent,postDisplayStudents } from '../controller/DisplayAllStudents.js';

import { postAddStudent, getAddStudent, allStudent } from '../controller/Student.js';
import { scheduleCompanyInterview, postScheduledInterviews, getScheduledInterviews, putUpdateStatus, downloadCsvFile } from '../controller/company.js';
const route = express.Router();

// route.get('/get', displayStudents);
route.post('/get', postAddStudent);
route.get('/add', getAddStudent);
route.get('/allStudent',allStudent )
// route.post('/allStudent', postAllStudent)


//routes for company

route.get('/schedule', scheduleCompanyInterview);
route.post('/scheduled', postScheduledInterviews );
route.get('/scheduled', getScheduledInterviews);
route.get('/downloadcsv',downloadCsvFile )
route.post('/update/:id', putUpdateStatus);

route.get('/logout', (req, res)=>
{
    req.session.destroy((err)=>
    {
        if(err)
            {
                console.log(err.message);
            }
        else{
            res.render('adminGetLogin');
        }
    })
})

export default route;
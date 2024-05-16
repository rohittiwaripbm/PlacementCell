import { scheduleInterview, getScheduledInterview, changeStatus, getScheduledInterviewsCsv } from "../Repo/companyRepo.js";
import { getAllStudents } from "../Repo/studentRepo.js";

export const scheduleCompanyInterview = async (req, res) => {
    let students = await getAllStudents();
  
    res.render('scheduleInterview', { students: students });
}

export const postScheduledInterviews = async (req, res) => {
  
    let result = await scheduleInterview(req.body);
    if (result) {

        let interviews = await getScheduledInterview();
        res.render('Interviews', { interviews: interviews });

    }
    else {
        res.send('something went wrong')
    }
}

export const getScheduledInterviews = async (req, res) => {
    let interviews = await getScheduledInterview();
    
    res.render('Interviews', { interviews: interviews });
}

export const putUpdateStatus = async (req, res) => {
    let result = await changeStatus(req.params.id, req.body.result);

    let interviews = await getScheduledInterview();
  
 
    res.render('Interviews', { interviews: interviews });
}

export const downloadCsvFile = async (req, res) => {
    const csv = await getScheduledInterviewsCsv();

    if (csv) {
        res.header('Content-Type', 'text/csv');
        res.attachment('scheduled_interviews.csv');
        return res.send(csv);
    } else {
        res.status(500).send('Error generating CSV');
    }

}
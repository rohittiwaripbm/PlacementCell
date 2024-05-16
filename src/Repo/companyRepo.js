import mongoose from "mongoose";
import { companySchema } from "../model/company.model.js";
import { Parser } from "json2csv";

let companyModel = mongoose.model("company", companySchema);

export const scheduleInterview = async (details) => {
    try {
        const newInterview = new companyModel(details);
        await newInterview.save();
        return true;
    } catch (error) {
        console.log(error.message)
        return false;
    }
}

export const getScheduledInterview = async () => {
    try {
        let result = await companyModel.find().populate('studentId');
        return result;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export const changeStatus = async (id, result) => {
    let updatedValue = await companyModel.findByIdAndUpdate(id, { result: result });
    return updatedValue;
}

export const getScheduledInterviewsCsv = async () => {
    try {
        let result = await companyModel.find().populate('studentId');
        const csvData = result.map(interview => {
            return {
                studentName: interview.studentId.studentName, // Assuming student schema has a name field
                studentEmail: interview.studentId.studentEmail, // Assuming student schema has an email field
                studentMobile: interview.studentId.studentMob, // Assuming student schema has a mobile field
                studentBatch: interview.studentId.studentBatch,
                studentCollege: interview.studentId.studentCollege,
                DSA_Score:interview.studentId.dsaScore,
                WEB_Score:interview.studentId.webDevScore,
                React_Score:interview.studentId.reactScore,
                companyName: interview.companyName, // Assuming companyModel has a companyName field
                interviewDate: interview.InterviewDate ? interview.InterviewDate.toISOString().split('T')[0] : 'NA',
                
            };
        });
        // Convert the data to CSV
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(csvData);

        return csv;

    } catch (error) {
        console.log(error.message);
        return false;
    }
}
/*
* Import the xlsx workbook spreedsheet
*/
const xlsx = require("xlsx");

/*
* Import mailer to send emails
*/

const mailer = require("./utils/mailerModule");

/*
* Import Email template
*/

const emailTemplateModule = require("./utils/emailTemplate");
require("dotenv").config();

/*
* Parse the whole workbook
*/
const workAssessment = xlsx.readFile("workAssessmentFinalListTemplate.xlsx");

/*
* Parse a specific sheet in the workbook
*/
const currentWorksheet = workAssessment.Sheets["Sheet1"];

/*
* Parse xlsx record as Json data
*/
const data = xlsx.utils.sheet_to_json(currentWorksheet);

let item;

for (item in data) {
//    Send email to every student
    mailer.sendEmail(
        data[item].Email,
        "Student Report",
        emailTemplateModule.emailTemplate(
            data[item].Student,
            data[item].Attendance,
            data[item]["First recommendation"],
            data[item]["Final recommendation"],
            data[item]["reason (first recommendation)"],
            data[item]["reason (first recommendation)"],
            data[item]["IP1 /31"],
            data[item]["IP2 /22"],
            data[item][" IP3 /22"],
            data[item]["IP4 /28"]
        )
    );
}

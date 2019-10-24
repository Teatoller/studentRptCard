/*
* Import the xlsx workbook spreedsheet
*/
const xlsx = require("xlsx");

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

console.log(data);

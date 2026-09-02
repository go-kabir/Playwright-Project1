import fs from 'fs'
import * as XLSX from 'xlsx';
const jsonpath='data.xlsx';
const workbook=XLSX.readFile(jsonpath);
const sheetName=workbook.SheetNames[0]
const worksheet=workbook.Sheets[sheetName]
const logData:any=XLSX.utils.sheet_to_json(worksheet)

interface printData{
name:string;
email:string;
phonenumber:string
}

const finalData= logData as printData[]



for(const {name,email,phonenumber} of logData){
console.log(name,email,phonenumber)
}

if (finalData.length>0){
console.log(logData[0].name,logData[0].email,logData[0].phonenumber)
}

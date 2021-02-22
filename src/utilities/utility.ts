import {API_ERRORS} from "../types/app.types";
import * as fs from 'fs';
import csv from 'csv-parser';
import {log} from 'console';

export const csvFileRead = (file: string, fileseparator :any) => {
const results: any[] = [];
try {
    fs.createReadStream(__dirname + '/../../input/'+file)
        .on('error', () => {
            log(API_ERRORS.FILE_ERROR.message)
            })
        .pipe(csv({ separator: fileseparator }))
        .on('data', (row) => results.push(row))
        .on('end', () => {
            const statsObj = fs.statSync(__dirname + '/../../input/'+file); 
            console.log("Columns Names:",Object.keys(results[0]));
            console.log("Size of File(Bytes):",statsObj.size);
            console.log("Total Rows in the file:",results.length);
    });
} catch(e) {
    console.log(API_ERRORS.UNKNOWN_ERROR.message + e)
}
}

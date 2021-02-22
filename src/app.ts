import {csvfileread} from "./utilities/utility";
import {API_ERRORS} from "./types/app.types";

if(process.argv[2] && process.argv[3]) {
   csvfileread(process.argv[2], process.argv[3]);
} else if (!process.argv[2] && !process.argv[3]) {
  console.log(API_ERRORS.COMMAND_ERROR.message);
} else if (!process.argv[3]) {
  console.log(API_ERRORS.COMMAND_ERROR.message);
}

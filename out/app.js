"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utilities/utility");
var app_types_1 = require("./types/app.types");
if (process.argv[2] && process.argv[3]) {
    utility_1.csvfileread(process.argv[2], process.argv[3]);
}
else if (!process.argv[2] && !process.argv[3]) {
    console.log(app_types_1.API_ERRORS.COMMAND_ERROR.message);
}
else if (!process.argv[3]) {
    console.log(app_types_1.API_ERRORS.COMMAND_ERROR.message);
}

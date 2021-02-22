"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvfileread = void 0;
var app_types_1 = require("../types/app.types");
var fs = __importStar(require("fs"));
var csv_parser_1 = __importDefault(require("csv-parser"));
var csvfileread = function (file, fileseparator) {
    var results = [];
    try {
        fs.createReadStream(__dirname + '/../../input/' + file)
            .on('error', function () {
            console.log(app_types_1.API_ERRORS.FILE_ERROR.message);
        })
            .pipe(csv_parser_1.default({ separator: fileseparator }))
            .on('data', function (row) { return results.push(row); })
            .on('end', function () {
            var statsObj = fs.statSync(__dirname + '/../../input/' + file);
            console.log("Columns Names:", Object.keys(results[0]));
            console.log("Size of File(Bytes):", statsObj.size);
            console.log("Total Rows in the file:", results.length);
        });
    }
    catch (e) {
        console.log(app_types_1.API_ERRORS.UNKNOWN_ERROR.message + e);
    }
};
exports.csvfileread = csvfileread;

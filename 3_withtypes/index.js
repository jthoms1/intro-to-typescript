"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const util_1 = require("./util");
var dirPath = process.argv[2];
if (!dirPath) {
    throw new Error('A directory path was not provided.');
}
var fullDirPath = path.resolve(dirPath);
console.log('Contents of directory ' + fullDirPath);
util_1.forEachFileInDir(fullDirPath, function (filePath) {
    var fileData = util_1.getFileData(filePath);
    if (fileData.isHidden) {
        return;
    }
    var messageLine = (fileData.isDirectory ? "d" : '-') + " " +
        fileData.pathData.base;
    console.log(messageLine);
});

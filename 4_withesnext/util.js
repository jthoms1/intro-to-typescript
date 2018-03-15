"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const promisify_1 = require("./promisify");
/**
 * Gather metadata about a file
 * @param filePath path to the file
 */
async function getFileData(filePath) {
    const fileStat = await promisify_1.default(fs.stat)(filePath);
    const isDirectory = fileStat.isDirectory();
    const pathData = path.parse(filePath);
    const isHidden = pathData.name.startsWith('.');
    return {
        isDirectory,
        isHidden,
        filePath,
        pathData
    };
}
exports.getFileData = getFileData;
/**
 * Loop over the files in a directory and execute the callback for every file
 * @param dirPath The directory path as a string
 * @param callback The callback will be executing for every file found.
 */
async function forEachFileInDir(dirPath, callback) {
    const files = await promisify_1.default(fs.readdir)(dirPath);
    files.sort();
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        await callback(filePath);
    }
}
exports.forEachFileInDir = forEachFileInDir;
;

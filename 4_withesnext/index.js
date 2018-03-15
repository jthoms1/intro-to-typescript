"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const util_1 = require("./util");
const [, , dirPath] = process.argv;
if (!dirPath) {
    throw new Error('A directory path was not provided.');
}
const fullDirPath = path.resolve(dirPath);
console.log('Contents of directory ' + fullDirPath);
util_1.forEachFileInDir(fullDirPath, async (filePath) => {
    const { isHidden, isDirectory, pathData } = await util_1.getFileData(filePath);
    if (isHidden) {
        return;
    }
    console.log(`${isDirectory ? 'd' : '-'} ${pathData.base}`);
});

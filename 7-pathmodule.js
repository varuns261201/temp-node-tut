//PATH MODULE
const path = require('path')
console.log(path.sep)

//gives correct path to a folder
const filePath =path.join('/content//','subfolder','test.txt')
console.log(filePath);

//gives the last file name of a path
const base = path.basename(filePath)
console.log(base)

//absolute accepts a seq of paths and resolves into an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute) 
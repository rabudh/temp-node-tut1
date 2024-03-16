const path = require('path')
console.log(path.sep) //this lets you see platform specific file address seperater '/' or '\'

const filePath = path.join('\content','subfolder','test.txt')
console.log(filePath) //just printing the path to check if it was done right

const base = path.basename(filePath)
console.log(base) //just prints the final point of the path in filepath variable

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute) //this prints the absolute path i.e., the drive it is in, and all the previous file path before 'content' folder



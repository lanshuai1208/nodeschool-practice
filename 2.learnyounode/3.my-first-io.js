const fs = require("fs");
const path = process.argv[2];

const buffer = fs.readFileSync(path);

const newLineNum = buffer.toString().split("\n").length - 1;

process.stdout.write(newLineNum + "\n");

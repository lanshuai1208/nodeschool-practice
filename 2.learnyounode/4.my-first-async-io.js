const fs = require("fs");
const path = process.argv[2];

function read() {
  fs.readFile(path, "utf8", function (err, data) {
    if (!err) {
      const newLineNum = data.split("\n").length - 1;
      process.stdout.write(newLineNum + "\n");
    }
  });
}

read();

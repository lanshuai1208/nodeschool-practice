const fs = require("fs");
const path = require("path");

const folderPath = process.argv[2];

const ext = process.argv[3];

fs.readdir(folderPath, function (err, data) {
  if (err) {
    process.stdout.write(err);
  }
  //   const reg = new RegExp(`\.${ext}$`);
  //   const filteredData = data.filter((file) => reg.test(file));
  const filteredData = data.filter((file) => path.extname(file) === "." + ext);
  filteredData.forEach((file) => process.stdout.write(file + "\n"));
});

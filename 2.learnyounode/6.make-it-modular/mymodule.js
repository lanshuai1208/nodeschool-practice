const fs = require("fs");
const path = require("path");

module.exports = function (dirname, ext, cb) {
  fs.readdir(dirname, function (err, data) {
    if (err) {
      cb(err);
      return;
    }
    const filterFiles = data.filter((file) => path.extname(file) === "." + ext);
    cb(null, filterFiles);
  });
};

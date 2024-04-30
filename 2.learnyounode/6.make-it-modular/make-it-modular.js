const dirname = process.argv[2];
const ext = process.argv[3];

const mymodule = require("./mymodule");

mymodule(dirname, ext, function (err, data) {
  if (err) {
    process.stdout.write(err + "\n");
    return;
  }
  data.forEach((file) => {
    process.stdout.write(file + "\n");
  });
});

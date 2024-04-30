const net = require("net");

const port = process.argv[2];

function getTime(format = "YYYY-MM-DD hh:mm:ss") {
  const time = new Date();
  const year = time.getFullYear();
  const month = `${time.getMonth() + 1}`.padStart(2, "0");
  const date = `${time.getDate()}`.padStart(2, "0");
  const hours = `${time.getHours()}`.padStart(2, "0");
  const minutes = `${time.getMinutes()}`.padStart(2, "0");
  const seconds = `${time.getSeconds()}`.padStart(2, "0");

  return format
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", date)
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);
}

const server = net.createServer(function (socket) {
  socket.end(getTime("YYYY-MM-DD hh:mm") + "\n");
});

server.listen(+port);

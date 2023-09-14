const http = require("http");
const puerto = 8000;
const host = "localhost";
const chalk = require("chalk");

const server = http.createServer((req, res) => {});

server.listen(puerto, host, () => {
  console.log(
    chalk.green(
      `El servidor de Jairo Baquero está escuchando en ${chalk.underline(
        `http://localhost:${puerto}`
      )}`
    )
  );
});

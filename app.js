const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  }
  if (req.url === "/about") {
    res.end("Same history for this think");
    res.end(`
  <h1>What!</h1>
    <p>This is a paragraph</p>
    <a href="/">back home</a>
  `);
  }
});

server.listen(5000);

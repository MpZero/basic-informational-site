const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(path.join(__dirname, "contact-me.html"), (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
      console.log(err);
    });
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

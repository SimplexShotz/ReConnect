const http = require('http');

const hostname = 'ec2-3-132-213-41.us-east-2.compute.amazonaws.com';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var url = req.url;
  if (url.split("?").length > 0) {
    url = url.substring(2, url.length - 1);
    console.log(url);
  }
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

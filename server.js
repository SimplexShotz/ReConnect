const http = require('http');

const hostname = 'ec2-3-132-213-41.us-east-2.compute.amazonaws.com';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.end('console.log("oof");');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const jsonServer = require('json-server');
const server = jsonServer.create();
const db = jsonServer.router('mock-server/db.json');

server.use(function (req, res, next) {
  setTimeout(next, 2000);
});

server.use(db);
server.listen(5000, () => {
  console.log('JSON Server is running');
});

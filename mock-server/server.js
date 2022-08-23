const jsonServer = require('json-server');
const server = jsonServer.create();
const db = jsonServer.router('mock-server/db.json');
const cors = require('cors');

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', '*');
  setTimeout(next, 1000);
});
server.use(jsonServer.bodyParser);

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
server.options('*', cors());

server.post('/auth/login/', (req, res) => {
  console.log(req.body);
  if (checkAuthorization(req.body)) {
    res.jsonp({
      token: '12254',
    });
  } else {
    res.sendStatus(401);
  }
});
server.post('/auth/logout/', (req, res) => {
  res.sendStatus(200);
});
server.use(db);

server.listen(5000, () => {
  console.log('JSON Server is running');
});

const checkAuthorization = (value) => {
  if (!value) return false;
  if (value?.email === 'admin@mail.ru' && value?.password === 'admin')
    return true;
};

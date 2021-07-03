import express from 'express';
import path from 'path';
import hogan from 'hogan-middleware';

const __dirname = path.resolve();

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hogan.__express);

const port = 3000;

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.get('/json', (req, res, next) => {
  const data = {
    greeting: 'Hello',
  };
  res.send(data);
});

app.get('/home', (req, res, next) => {
  res.render('home', null);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

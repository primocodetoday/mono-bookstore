import express from 'express';
import path from 'path';
import hogan from 'hogan-middleware';
import router from './routes/index.js';

const app = express();
const __dirname = path.resolve();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hogan.__express);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

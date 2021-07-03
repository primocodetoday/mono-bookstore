import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.get('/json', (req, res, next) => {
  const data = {
    greeting: 'Hello',
  };
  res.send(data);
});

router.get('/home', (req, res, next) => {
  res.render('home', null);
});

export default router;

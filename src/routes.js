import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'João',
    email: 'joao@teste.com.br',
    password_hash: '12341412',
  });

  return res.json(user);
});

export default routes;

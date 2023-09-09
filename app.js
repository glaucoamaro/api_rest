import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRouter from './src/routes/home';
import userRouter from './src/routes/user';
import tokenRouter from './src/routes/token';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens/', tokenRouter);
  }
}

export default new App().app;

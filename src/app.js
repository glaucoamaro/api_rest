import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';

import homeRouter from './routes/home';
import userRouter from './routes/user';
import tokenRouter from './routes/token';
import studentsRouter from './routes/students';
import imageRouter from './routes/image';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images') /* '../uploads/images' */));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens/', tokenRouter);
    this.app.use('/students/', studentsRouter);
    this.app.use('/images/', imageRouter);
  }
}

export default new App().app;

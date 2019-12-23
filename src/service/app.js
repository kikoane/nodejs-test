import express from 'express';
import cors from 'cors';
import playersRouter from '../player/router';
import errorHandler from '../middleware/error';

const logger = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/players', playersRouter);

app.use(errorHandler);

export default app;

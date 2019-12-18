import express from 'express';
import cors from 'cors';
import playersRouter from './players/router';
import errorHandler from './middlewares/error';
import { SERVER_PORT } from './utils/constants';

const logger = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/players', playersRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});

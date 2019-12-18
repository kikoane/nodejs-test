import express from 'express';
import cors from 'cors';

const logger = require('morgan');
require('dotenv').config();

const { SERVER_PORT } = process.env || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on port ${SERVER_PORT}`);
});

require('dotenv').config();

const { SERVER_PORT } = process.env || 3001;

const { END_POINT } =
    process.env || 'https://alivebyacadomia.github.io/headtohead.json';

export { SERVER_PORT, END_POINT };

import express from 'express';
import Router from './src/Router';
import bodyParser from 'body-parser';

const server = express();

server.use('/api', bodyParser.json() ,Router);

server.listen(3000);

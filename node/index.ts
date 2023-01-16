import express from 'express';
import Router from './src/Router';

const server = express();

server.use('/api',Router)

server.listen(3000)

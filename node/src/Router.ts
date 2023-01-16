import express from 'express';

const Router = express.Router();

Router.get('/users');
Router.get('/users/:id');

Router.post('/users');
Router.put('/users/:id');

Router.delete('/users/:id');

export default Router;
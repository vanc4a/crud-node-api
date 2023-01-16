import express from 'express';
import {getAll, getById, deleteUser, create} from './controllers/usersController';

const Router = express.Router();

Router.get('/users', getAll);
Router.get('/users/:id', getById);

Router.post('/users', create);
Router.put('/users/:id');

Router.delete('/users/:id', deleteUser);

export default Router;
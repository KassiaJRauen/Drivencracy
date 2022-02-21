import express, {json} from 'express';
import cors from 'cors';
import {createPool, getPool} from './controllers/poolController.js';
import {createChoice, getChoice} from './controllers/choiceController.js';
import {vote} from './controllers/voteController.js';

const server = express();
server.use(json());
server.use(cors());

server.post('/pool', createPool);

server.get('/pool', getPool);

server.post('/choice', createChoice);

server.get('/pool/:id/choice', getChoice);

server.post('/choice/:id/vote', vote);

server.listen(5000, () => {
    console.log("Listening on 5000")
})
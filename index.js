// SERVER SETUP
const express = require('express');
const server = express();
server.use(express.json());

// IMPORT ROUTERS
const PR = require('./data/routers/projectRouter');
const TR = require('./data/routers/taskRouter');
const RR = require('./data/routers/resourceRouter');

// USE ROUTERS
server.use('/project', PR);
server.use('/tasks', TR);
server.use('/resource', RR);

// DEFAULT ROUTE
server.get('/', (req, res) => {
    res.send(`The server works!`);
});

// SERVER LISTEN
server.listen(4000, () => {
    console.log(`===server listening on port 4000===`);
});
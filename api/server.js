const express = require("express");

const accountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use('*', (request, response) => {
    response.status(404).json({ message: 'That URL was not found.' });
});

module.exports = server;

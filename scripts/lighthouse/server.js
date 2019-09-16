'use strict';

const express = require('express');
const path = require('path');
const { port } = require('./config');

let server = express();

server.use(express.static(path.join(__dirname, '/../../build')));

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});

const startServer = function() {
    server = server.listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });
};

const stopServer = function() {
    server.close(() => console.log('stoping server'));
};

module.exports = {
    startServer,
    stopServer,
};

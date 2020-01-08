const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const journalRouter = require('../api/journal/journal-router.js')

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/journals', journalRouter);

server.get('/', (req, res) => {
  res.send("It's working!");
});

module.exports = server;
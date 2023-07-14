const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, emails } = require('./data');

connection.on('error', (err) => console.error(err));
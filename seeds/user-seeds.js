const { User } = require('../models');

const userData = [
  {
    username: 'Vane04',
    password: 'password12345'
  },
  {
    username: 'Sal03',
    password: 'password12345'
  },
  {
    username: 'Lernantino02',
    password: 'password12345'
  },
  {
    username: 'Amiko01',
    password: 'password12345'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;

  
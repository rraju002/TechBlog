const { User } = require('../models');

const userData = [
  {
    username: 'rhowenraju',
    password: 'test1'
    
  },
  {
    username: 'rojo01',
    password: 'test2'
  },
  {
    username: 'rr',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
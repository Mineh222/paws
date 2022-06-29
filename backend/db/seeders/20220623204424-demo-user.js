'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@gmail.com',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'minehgharabegi@gmail',
        username: 'Mineh',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@gmail.com',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user2@gmail.com',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@gmail.com',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@gmail.com',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user5@gmail.com',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user6@gmail.com',
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user7@gmail.com',
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user8@gmail.com',
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user9@gmail.com',
        username: 'FakeUser9',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo', 'Mineh', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4', 'FakeUser5', 'FakeUser6', 'FakeUser7', 'FakeUser8', 'FakeUser9'] }
    }, {});
  }
};

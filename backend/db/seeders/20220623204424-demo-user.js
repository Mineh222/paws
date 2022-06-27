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
        email: 'user123@gmail.com',
        username: 'FakeUser123',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo', 'Mineh', 'FakeUser123'] }
    }, {});
  }
};

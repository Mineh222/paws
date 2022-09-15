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
        email: 'cinny@gmail.com',
        username: 'cinnamon',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'anthony@gmail.com',
        username: 'anthonyyyb',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'michael@gmail.com',
        username: 'michael22',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'angie@gmail.com',
        username: 'angiighar',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'buddy@gmail.com',
        username: 'buddie',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'aroob@gmail.com',
        username: 'rubyy123',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'jason@gmail.com',
        username: 'jason22',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'leo@gmail.com',
        username: 'leodadog',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'jax@gmail.com',
        username: 'goldenj',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo', 'Mineh', 'cinnamon', 'anthonyyyb', 'michael22', 'angiighar', 'buddie', 'rubyy123', 'jason22', 'leodadog', 'goldenj'] }
    }, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Daycares', [
        {
          ownerId: 1,
          name: 'Wag Hotels',
          description: 'We offer hotel-style accommodations for cats and dogs of all ages, sizes and breeds at our state-of-the-art facility, located on Barrington Ave between Olympic and Pico boulevards.',
          businessHours: 'Open 24/7',
          phoneNumber: '(888) 924-5463',
          image: 'https://assets.waghotels.com/dynamic/cb9f7880-82dd-11e9-a4b7-092bfee912ab.jpg',
          address: '960 N Highland Ave, Los Angeles',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 2,
          name: 'Pet Rush Inn',
          description: 'Pet Rush Inn serves the Glendale, Burbank, Pasadena areas as your companion’s favorite pet hotel for boarding, doggy day care, and grooming.',
          businessHours: 'Open Monday-Saturday 7AM-7PM',
          phoneNumber: '(818) 471-4298',
          image: 'https://assets.waghotels.com/dynamic/c552bc90-82eb-11e9-94c4-0badb4731452.jpg',
          address: '115 W Linden Ave, Burbank, CA 91502',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 3,
          name: 'Bow Wow Bungalow',
          description: 'Our dog daycare provides a safe, clean, and fun environment for your furry family member while you’re away at work or play.',
          businessHours: 'Open Monday-Sunday 7AM-8PM',
          phoneNumber: '(818) 565-3555',
          image: 'https://www.barkdenver.com/wp-content/uploads/2019/02/image-daycare3.jpg',
          address: '2711 N California St, Burbank, CA 91504',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Daycares', null, {});
  }
};

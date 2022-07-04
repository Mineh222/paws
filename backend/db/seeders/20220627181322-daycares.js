'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Daycares', [
        {
          ownerId: 1,
          name: 'Wag Hotels',
          description: 'We offer hotel-style accommodations for cats and dogs of all ages, sizes and breeds at our state-of-the-art facility, located on Barrington Ave between Olympic and Pico boulevards.',
          businessHours: 'Open 24/7',
          phoneNumber: '8889245463',
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
          phoneNumber: '8184714298',
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
          phoneNumber: '8185653555',
          image: 'https://www.barkdenver.com/wp-content/uploads/2019/02/image-daycare3.jpg',
          address: '2711 N California St, Burbank, CA 91504',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 1,
          name: 'The Hounds Club',
          description: 'The Hounds Club is made up of dog lovers and owners, just like you. We love, pamper, and even spoil them, and believe that they are members of our family. Just like you, we worry about our dogs and want the very best for them. When we are away, we want them to be safe and healthy, and also want them to be happy, with lots of exercise, socialization, and companionship.',
          businessHours: 'Open Monday-Sunday 6:30AM-8PM',
          phoneNumber: '3239547272',
          image: 'https://thehoundsclub.com/wp-content/uploads/2015/04/DSC_0117-1-300x200.jpg',
          address: '520 W Windsor Rd, Glendale, CA 91204',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Daycares', null, {});
  }
};

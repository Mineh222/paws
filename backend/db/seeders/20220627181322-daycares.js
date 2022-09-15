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
        },
        {
          ownerId: 6,
          name: 'The Doggy Retreat',
          description: "The founders of Dog Days are not only dedicated to providing a safe and fun environment for dogs, but also fulfilling their physical and social needs in a controlled and supervised facility with a team of nurturing pack leaders. Dogs are our number one priority and we love watching them build relationships with each other and learn about interacting in a pack atmosphere. That's why our daycare and boarding program is based on intensive and direct social interactions between dogs, with our experienced staff guiding and leading them. We keep track of everyone's progress so we can keep you informed of your dog's behavior. Any aggression to dogs or people is not tolerated nor do we accept dogs who do not benefit positively from being in a group environment. Our number one priority is safety, but our number one goal is the quality of each dog's stay. We also want to change the way dog daycare professionals can make a living by giving them a chance to have actual careers in the dog care industry. This benefits the dogs as well as the people, as customers can always depend on reliable, knowledgeable caretakers who enjoy and take pride in their work.",
          businessHours: 'Open Monday-Friday 10AM-6PM',
          phoneNumber: '3233567728',
          image: 'https://images.squarespace-cdn.com/content/v1/59de7345914e6b6ad11fc457/1581823437380-85HVUJBXEAZS2FI1JPRM/goldenspool.jpg',
          address: '232 Santa Monica Blvd, Santa Monica, CA 90404',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 7,
          name: 'Doptopia',
          description: "Dogtopia of Miramar is dog owners' one-stop shop for daycare, boarding, spa services and more! If you're looking for a place to leave your dog for just a few hours or the entire day, we offer weekly wellness plans. Heading out of town and don't want to leave your pup alone? We also have overnight or extended boarding. Our team of trained professionals strive to make sure your pup has a paw-some time when they stay with us!",
          businessHours: 'Open Monday-Saturday 7AM-7PM',
          phoneNumber: '7475550123',
          image: 'https://s3-prod.dogtopia.com/wp-content/uploads/2018/12/local-homepage-slide-image-faqs-600x350.jpg',
          address: '4094 Mission Street, Los Angeles, CA 90046',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 5,
          name: 'Bark Boulevard',
          description: "We offer doggie daycare and are open during all major holidays. We have the ability to care for most canines. Whether you prefer a group play environment, or if your furry family member is not well socialized, we offer the individual private care necessary. It is important to us that every canine and canine owner have the option of a safe, reliable, loving and reasonably priced home away from home when needed.  We ask that you bring their normal food and a summary of their daily routine, and any other special requests and/or preferences.",
          businessHours: 'Open Monday-Sunday 6AM-10PM',
          phoneNumber: '3231126689',
          image: 'https://s3-prod.dogtopia.com/wp-content/uploads/2018/12/local-homepage-slide-image-webcams-600x350.jpg',
          address: '777 Puppy Lane, Los Angeles, CA 90010',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerId: 9,
          name: 'Canines Unleashed Inc.',
          description: "MTFL - Make Them Feel Loved! Keep them safe and sound. Provide a sparkling clean Club. Surround them with good humans. More wiggle in the wag!",
          businessHours: 'Open Monday-Sunday 8AM-8PM',
          phoneNumber: '8189997777',
          image: 'https://s3-prod.dogtopia.com/wp-content/uploads/sites/122/2019/09/frenchies.jpg',
          address: '1815 Cherry Road, Los Angeles, CA 90025',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Daycares', null, {});
  }
};

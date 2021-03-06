'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 2,
          daycareId: 1,
          rating: 5,
          review: "I drop my dogs off here when I visit my girlfriend. Leo and Jax love this place and can't wait to come back and play with all their four legged friends again!",
          image: "https://i.postimg.cc/XYd6pKZt/leo-jax-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          daycareId: 1,
          rating: 3,
          review: "Very convenient for traveling if you can't take your pup with you. I would have liked more updates throughout my dog's stay.",
          image: "https://hips.hearstapps.com/edc.h-cdn.co/assets/17/02/best-dog-boarding-wag-hotels.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          daycareId: 1,
          rating: 5,
          review: "The best doggy day care in the LA area!! Safe, clean, and very accommodating. Max loves coming here and playing with all the other dogs.",
          image: "https://images.squarespace-cdn.com/content/v1/5f0113c09fa198769d83685e/1594091924928-E9VICJ3FADCZTRX473QB/IMG_5457.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          daycareId: 2,
          rating: 5,
          review: "My dog loves this place. Not only does he get to play, but they offer grooming services and training as well, which is aweseome!",
          image: "https://www.petrush.net/wp-content/uploads/photo-gallery/pet-rush-inn-groom.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          daycareId: 2,
          rating: 5,
          review: "Great doggy day care facility. Cinnamon loves it here, and can't wait to come back!",
          image: "https://i.postimg.cc/BtfLBQMp/cinny2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          daycareId: 2,
          rating: 3,
          review: "My puppy enjoys coming to Pet Rush Inn, but I don't think the training lessons have been helping him.",
          image: "https://www.petrush.net/wp-content/uploads/2020/07/116-VET.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 8,
          daycareId: 3,
          rating: 5,
          review: "Bow Wow Bungalow is a super fun place for dogs. When I drop off my pup, I know she is in good hands here. She loves playing in their mini pools, they're great during the summer time.",
          image: "https://i.pinimg.com/736x/74/aa/97/74aa97d8f81c4870ecb23584f7676b58--french-bulldog-rescue-network-party-animals.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 9,
          daycareId: 3,
          rating: 4,
          review: "This place is a good doggy day care, but it is a bit small and can get crowded in the play area.",
          image: "https://64.media.tumblr.com/a5f46ef795ef77a11d66e75828f8214e/tumblr_nuhxkvIQ7l1rithero1_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          daycareId: 3,
          rating: 4,
          review: "A nice doggy day care place to drop off your pet when your at work or away!",
          image: "https://i.ytimg.com/vi/2zTdE2w_wUA/maxresdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          daycareId: 4,
          rating: 4,
          review: "I drop my dog, Max, off at The Hounds Club almost every morning. I love knowing that he is in good hands while I am at work.",
          image: "https://www.dogsonthefarm.com/design/pages/services/daycare2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          daycareId: 4,
          rating: 5,
          review: "It's so hard dropping off Leo when we're away, but The Hound Club is our go to, and we wouldn't trust any place else.",
          image: "https://i.postimg.cc/L6Mjf2h5/leo-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          daycareId: 4,
          rating: 3,
          review: "Dropped my dog off here when visiting Glendale. Not the best doggy daycare I've been to, but it was alright for a last minute drop off.",
          image: "https://thehoundsclub.com/wp-content/uploads/2015/04/DSCF1143w-300x204.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};

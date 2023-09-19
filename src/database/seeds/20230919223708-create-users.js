'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'email245@gmail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vanessa',
          email: 'vanessa245@gmail.com',
          password_hash: await bcrypt.hash('56789101112', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Michele',
          email: 'michele245@gmail.com',
          password_hash: await bcrypt.hash('98765432', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down() {
    /*  */
  },
};

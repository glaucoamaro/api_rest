import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 8],
            msg: 'Your name needs to have between 3 and 8 characters.',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 8],
            msg: 'Your last name needs to have between 3 and 8 characters.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isIn: {
            msg: 'Your age needs to be an integer number.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'error',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'error',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}

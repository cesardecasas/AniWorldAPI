'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.List,{
        foreignKey:'user_id'
      }),
      User.hasMany(models.Comment,{
        foreignKey:'user_id'
      })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    userName: DataTypes.STRING,
    profilePic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
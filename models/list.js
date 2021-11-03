'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List.belongsTo(models.User,{
        foreignKey:'user_id'
      })
    }
  };
  List.init({
    anime_id: DataTypes.ARRAY(DataTypes.STRING),
    manga_id: DataTypes.ARRAY(DataTypes.STRING),
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
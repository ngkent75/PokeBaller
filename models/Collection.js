const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model {}

Collection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'collection',
  }
);

module.exports = Collection;
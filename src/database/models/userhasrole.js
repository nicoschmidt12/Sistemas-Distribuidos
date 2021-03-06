'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHasRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserHasRole.belongsTo(models.User, {foreignKey: 'users_id'})
      UserHasRole.belongsTo(models.Role, {foreignKey: 'roles_id'})
    }
  };
  UserHasRole.init({
    users_id: DataTypes.INTEGER,
    roles_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserHasRole',
  });
  return UserHasRole;
};
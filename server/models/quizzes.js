'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizzes = sequelize.define('Quizzes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Quizzes.associate = function(models) {
    Quizzes.hasMany(models.Questions, {
      foreignKey: 'quizId',
      onDelete: 'CASCADE'
    })
  };
  return Quizzes;
};
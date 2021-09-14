'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typeAnswer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Questions.associate = function(models) {
    Questions.hasMany(models.Answers, {
      foreignKey: 'questionId',
      onDelete: 'CASCADE'
    })
  };
  return Questions;
};
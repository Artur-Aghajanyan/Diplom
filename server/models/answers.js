'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define('Answers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trueAnswer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  return Answers;
};
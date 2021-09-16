'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {});
    // eslint-disable-next-line no-unused-vars
    User.associate = function (models) {
        // associations can be defined here
    };

    User.create({name:'admin', surname:'admin', password:'adminadmin', role:'admin', email:'admin@admin.com', id:1})
    return User;
};
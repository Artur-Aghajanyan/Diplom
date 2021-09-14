const {Users} = require('../models/')

function index(req, res) {
    Users.findOne({
        where: {
            email: req.headers.email,
            password: req.headers.password
        }
    })
        .then((user) => {
            if (user) {
                return res.status(200).json({
                    user,
                    status: 'OK',
                    token: require('crypto').randomBytes(64).toString('hex')
                });
            } else {
                return res.status(400).json({
                    status: 'There is not user like that!',
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'There is not user like that!',
                name: error.name
            });
        });
}

function create(req, res) {
    Users.create({
        name: req.body.user.name,
        surname: req.body.user.surname,
        email: req.body.user.email,
        password: req.body.user.password,
        role: 'user',
    })
        .then((user) => {
            return res.status(200).json({user, status: 'Created successful'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not Create User',
                name: error.name
            });
        });
}

function updateName(req, res) {
    Users.update(
        {
            name: req.body.name
        },
        {
            where: {
                id: req.body.id
            }
        }
    )
        .then((user) => {
            return res.status(200).json({user, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not update user data',
                name: error.name
            });
        });
}

function updateSurname(req, res) {
    Users.update({
            surname: req.body.surname
        },
        {
            where: {
                id: req.body.id
            }
        })
        .then((user) => {
            return res.status(200).json({user, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not update user data',
                name: error.name
            });
        });
}

function updatePassword(req, res) {
    Users.update(
        {
            password: req.body.password
        },
        {
            where: {
                id: req.body.id
            }
        })
        .then((user) => {
            return res.status(200).json({user, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not update user data',
                name: error.name
            });
        });
}

function destroy(req, res) {
    Users.destroy({
        where: {id: req.body.id},
    })
        .then((user) => {
            return res.status(200).json({user, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not Delete User',
                name: error.name
            });
        });
}

module.exports = {index, create, updateName, destroy, updateSurname, updatePassword}
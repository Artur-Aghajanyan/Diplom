const {Quizzes} = require('../models/')

function index(req, res) {
    Quizzes.findAll({})
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Error',
                name: error.name
            });
        });
}


function create(req, res) {
    Quizzes.create({
        name: req.body.name,
    })
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Error',
                name: error.name
            });
        });
}

function update(req, res) {
    Quizzes.update(
        {name: req.body.name},
        {
            where: {
                id: req.body.id
            }
        }
    )
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not update Quiz',
                name: error.name
            });
        });
}

function destroy(req, res) {
    Quizzes.destroy({
        where: {id: req.body.id},
    })
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not Delete Quiz',
                name: error.name
            });
        });
}

module.exports = {index, create, update, destroy}
const {Questions} = require('../models/')

function index(req, res) {
    Questions.findAll({
        where: {
            quizId: req.headers.quizid
        }
    })
        .then((questions) => {
            return res.status(200).json({questions, status: 'OK'})
        })
        .catch((error) => {
            return res.status(400).json({error, status: 'Can not found question'})
        });
}

function create(req, res) {
    Questions.create({
        name: req.body.name,
        typeAnswer: req.body.typeAnswer,
        quizId: req.body.quizId,
    })
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({error, status: 'Can not create question'})
        });
}

function update(req, res) {
    Questions.update(
        {
            name: req.body.question.name,
            typeAnswer: req.body.question.typeAnswer
        },
        {
            where: {
                id: req.body.question.questionId
            }
        }
    )
        .then((question) => {
            return res.status(200).json({question, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not update Question',
                name: error.name
            });
        });
}

function destroy(req, res) {
    Questions.destroy({
        where: {id: req.body.id},
    })
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not Delete Questions',
                name: error.name
            });
        });
}

module.exports = {index, create, update, destroy}
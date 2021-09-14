const {Answers} = require('../models/')

function index(req, res) {
    Answers.findAll({
        where: {
            questionId: req.headers.question_id
        }
    })
        .then((answers) => {
            return res.status(200).json({answers, status: 'OK'})
        })
        .catch((error) => {
            return res.status(400).json({error})
        });
}

function create(req, res) {
    Answers.create({
        name: req.body.name,
        trueAnswer: req.body.trueAnswer,
        questionId: req.body.questionId
    })
        .then((answer) => {
            return res.status(200).json({answer, status: 'OK'})
        })
        .catch((error) => {
            return res.status(400).json({error, status: 'Can not Do that'})
        });
}

function update(req, res) {
    Answers.update(
        {
            name: req.body.name,
            trueAnswer: req.body.trueAnswer
        },
        {
            where: {
                questionId: req.body.questionId,
                id: req.body.id
            }
        }
    )
        .then((answer) => {
            return res.status(200).json({answer, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not update Answer',
                name: error.name
            });
        });
}

function destroy(req, res) {
    Answers.destroy({
        where: {questionId: req.body.questionId},
    })
        .then((response) => {
            return res.status(200).json({response, status: 'OK'});
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'Can not Delete Answers',
                name: error.name
            });
        });
}

module.exports = {index, create, update, destroy}
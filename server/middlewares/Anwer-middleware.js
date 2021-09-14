const checkDataForGetAnswers = (req, res, next) => {
    if (req.headers.question_id) {
        return next()
    }
    return res.status(400).json('Empty question id');
}

const checkDataForCreateAnswer = (req, res, next) => {
    if (req.body.name && req.body.questionId) {
        return next()
    }
    return res.status(400).json('There is empty data');
}

const checkDataForUpdateAnswer = (req, res, next) => {
    if (req.body.name && req.body.id) {
        return next()
    }
    return res.status(400).json('There is empty data');
}

const checkDataForDeleteAnswer = (req, res, next) => {
    if (req.body.questionId) {
        return next()
    }
    return res.status(400).json('Question id empty');
}

module.exports = {
    checkDataForGetAnswers,
    checkDataForCreateAnswer,
    checkDataForUpdateAnswer,
    checkDataForDeleteAnswer
}
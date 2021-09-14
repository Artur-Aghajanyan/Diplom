const checkExistQuestionId = (req, res, next) => {
    if (req.headers.quizid) {
        return next();
    }
    return res.status(400).json('There is not ID for get Question data');
}

const checkDataForCreateQuestion = (req, res, next) => {
    if (req.body.name && req.body.typeAnswer && req.body.quizId) {
        return next();
    }
    return res.status(400).json('There is empty data');
}
const checkDataForUpdateQuestion = (req, res, next) => {
    if (req.body.question.name && req.body.question.typeAnswer && req.body.question.questionId) {
        return next();
    }
    return res.status(400).json('There is empty data');
}

const checkDataForDeleteQuestion = (req, res, next) => {
    if (req.body.id) {
        return next();
    }
    return res.status(400).json('Empty ID');
}

module.exports = {
    checkExistQuestionId,
    checkDataForCreateQuestion,
    checkDataForUpdateQuestion,
    checkDataForDeleteQuestion
}

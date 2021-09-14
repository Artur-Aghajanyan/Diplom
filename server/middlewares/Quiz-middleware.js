const checkExistDataQuiz = (req, res, next) => {
    if (req.body.name) {
        return next()
    }
    return res.status(400).json('Empty name or id');
}

const checkExistQuizId = (req, res, next) => {
    if (req.body.id) {
        return next()
    }
    return res.status(400).json('Empty id');
}

module.exports = {checkExistDataQuiz, checkExistQuizId}
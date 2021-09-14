const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz-controller')
const questionController = require('../controllers/question-controller')
const answerController = require('../controllers/answer-controller')
const userController = require('../controllers/user-controller')

const {
    checkExistDataQuiz,
    checkExistQuizId
} = require("../middlewares/Quiz-middleware");

const {
    checkExistQuestionId,
    checkDataForCreateQuestion,
    checkDataForUpdateQuestion,
    checkDataForDeleteQuestion
} = require("../middlewares/Question-middleware");

const {
    checkDataForGetAnswers,
    checkDataForCreateAnswer, checkDataForUpdateAnswer, checkDataForDeleteAnswer
} = require("../middlewares/Anwer-middleware");

const {checkEmail} = require("../middlewares/User-middleware");

router.get('/api/user/', userController.index);
router.post('/api/user/create/', checkEmail, userController.create);
router.put('/api/user/name/', userController.updateName);
router.put('/api/user/surname/', userController.updateSurname);
router.put('/api/user/password/', userController.updatePassword);
router.put('/api/user/destroy/', userController.destroy);

router.get('/api/quizzes/', quizController.index);
router.post('/api/quiz/', checkExistDataQuiz, quizController.create);
router.put('/api/quiz/', checkExistQuizId, quizController.update);
router.delete('/api/quiz/destroy/', checkExistQuizId, quizController.destroy);

router.get('/api/questions/', checkExistQuestionId, questionController.index)
router.post('/api/question/', checkDataForCreateQuestion, questionController.create)
router.put('/api/question/', checkDataForUpdateQuestion, questionController.update)
router.delete('/api/question/destroy/', checkDataForDeleteQuestion, questionController.destroy)

router.get('/api/answers/', checkDataForGetAnswers, answerController.index)
router.post('/api/answer/', checkDataForCreateAnswer, answerController.create)
router.put('/api/answer/', checkDataForUpdateAnswer, answerController.update)
router.delete('/api/answers/destroy/', checkDataForDeleteAnswer, answerController.destroy)

module.exports = router;
// eslint-disable-next-line no-undef
const url = `http://localhost:${process.env.PORT || 7000}`

// User part
export const postUser = async (user) => {
  return await fetch(`${url}/api/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user
    })
  })
}

export const getUser = async (user) => {
  return await fetch(`${url}/api/user`, {
    method: "GET",
    headers: {
      email: user.email,
      password: user.password,
      "Content-Type": "application/json",
    }
  })
}

export const resetUserName = async (user) => {
  return await fetch(`${url}/api/user/name`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user.name,
      id: user.id
    })
  })
}
export const resetUserSurname = async (user) => {
  return await fetch(`${url}/api/user/surname`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surname: user.surname,
      id: user.id
    })
  })
}
export const resetUserPassword = async (user) => {
  return await fetch(`${url}/api/user/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: user.password,
      id: user.id
    })
  })
}

export const destroyUser = async (userId) => {
  return await fetch(`${url}/api/quiz/destroy/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userId
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}




// Quiz part
export const postQuiz = async (quiz) => {
  return await fetch(`${url}/api/quiz`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: quiz
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const getQuizzes = async () => {
  return await fetch(`${url}/api/quizzes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const updateQuiz = async (quizId, value) => {
  return await fetch(`${url}/api/quiz/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: quizId,
      name: value
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const destroyQuiz = async (quizId) => {
  return await fetch(`${url}/api/quiz/destroy/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: quizId
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

// Question part
export const getQuestions = async (quizId) => {
  return await fetch(`${url}/api/questions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      quizId: quizId
    }
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const postQuestion = async (question) => {
  return await fetch(`${url}/api/question/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: question.name,
      typeAnswer: question.typeAnswer,
      quizId: question.quizId,
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const destroyQuestion = async (questionId) => {
  return await fetch(`${url}/api/question/destroy/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: questionId
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const updateQuestion = async (question) => {
  return await fetch(`${url}/api/question/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

// Answer part
export const postAnswer = async (answer) => {
  return await fetch(`${url}/api/answer/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: answer.name,
      trueAnswer: answer.trueAnswer,
      questionId: answer.questionId,
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const getAnswers = async (questionId) => {
  return await fetch(`${url}/api/answers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      question_id: questionId
    }
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}
export const destroyAnswer = async (questionId) => {
  return await fetch(`${url}/api/answers/destroy/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      questionId
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

export const updateAnswers = async (answer) => {
  return await fetch(`${url}/api/answer/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: answer.name,
      trueAnswer: answer.trueAnswer,
      questionId: answer.questionId,
      id: answer.id
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}

import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Register from './views/pages/register/Register';
import Home from './views/pages/home/Home';
import Page404 from './views/pages/page404/Page404';
import Login from './views/pages/login/Login';
import {
  getUser,
  postUser,
  resetUserName,
  resetUserPassword,
  resetUserSurname,
  destroyAnswer,
  destroyQuestion,
  destroyQuiz,
  getAnswers,
  getQuestions,
  getQuizzes,
  postAnswer,
  postQuestion,
  postQuiz,
  updateAnswers,
  updateQuestion,
  updateQuiz
} from './api';
import './scss/style.scss';
import Setting from "./views/users/Setting";
import HelloWorld from "./views/pages/HelloWorld";
import CodeStructure from "./views/pages/CodeStructure";
import CreateAnswer from "./components/answers/CreateAnswer";
import UpdateAnswer from "./components/answers/UpdateAnswer";
import Admin from "./components/Admin";
import Modal from "./components/modal/Modal";
import Variables from "./views/pages/Variables";
import DataTypes from "./views/pages/DataTypes";

class App extends Component {
  state = {
    register: {
      name: '',
      surname: '',
      email: '',
      password: ''
    },
    statusUpdate: false,
    user: {},
    loginResult: {},
    responseRegister: {},
    loggedIn: false,


    isShowing: false,
    quizzes: [],
    questions: [],
    answerType: 'check-box',
    emptyQuiz: false,
    create_question_res: false,
    delete_type_for_modal: '',
    updateQuestionRes: '',
    question: '',
    answers: []
  }

  createUser = () => {
    postUser(this.state.register).then(res => res.json()).then(r => {
      this.setState({responseRegister: r});
      localStorage.setItem('status', JSON.stringify(r.status));
    }).catch(err => {
      this.setState({responseRegister: err});
    });
  }
  loginUser = (data) => {
    getUser(data).then(res => res.json()).then(r => {
      this.setState({loginResult: r});
      if (r.token) {
        if (r.user.role === 'admin') {
          localStorage.setItem('adminToken', JSON.stringify(r.token));
          localStorage.setItem('adminId', JSON.stringify(r.user.id));
        } else {
          localStorage.setItem('token', JSON.stringify(r.token));
          localStorage.setItem('id', JSON.stringify(r.user.id));
        }
        this.setState({user: r});
      } else {
        localStorage.removeItem('token');
      }
    }).catch(err => {
      this.setState({loginResult: err});
    });
  }
  changeUserData = (user) => {
    if (user.name) {
      resetUserName(user).then(res => res.json()).then(r => {
        this.setState({user: r});
        this.setState({statusUpdate: true})
      })
        .catch(() => {
          this.setState({statusUpdate: false});
        });
    } else if (user.surname) {
      resetUserSurname(user).then(res => res.json()).then(r => {
        this.setState({user: r});
        this.setState({statusUpdate: true})
      })
        .catch(() => {
          this.setState({statusUpdate: false});
        });
    } else if (user.password) {
      resetUserPassword(user).then(res => res.json()).then(r => {
        this.setState({user: r});
        this.setState({statusUpdate: true})
      })
        .catch(() => {
          this.setState({statusUpdate: false});
        });
    }
  }


  constructor(props) {
    super(props)
    let quizzes;
    let questions;
    getQuizzes().then(res => {
      this.setState({quizzes: res.response});
      if (res.response.length) {
        getQuestions(res.response[0].id).then(r => {
          this.setState({questions: r.questions});
        })
      } else {
        this.setState({emptyQuiz: true})
      }
    })
    this.setState({quizzes: quizzes});
    this.setState({questions: questions});
  }

  // Functions for Modal
  openModalHandler = (id, title, type) => {
    if (type === 'quiz') {
      this.setState({
        quizId: id,
        isShowing: true,
        modal_title: title,
        delete_type_for_modal: type
      });
    } else if (type === 'question') {
      this.setState({
        questionId: id,
        isShowing: true,
        modal_title: title,
        delete_type_for_modal: type
      });
    }
  }
  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  // Functions for Quiz
  deleteQuiz = id => {
    const quizzes = [...this.state.quizzes];
    destroyQuiz(id).then(res => {
      if (res.status.toUpperCase() === 'OK') {
        for (let i = 0; i < quizzes.length; ++i) {
          if (quizzes[i].id === id) {
            quizzes.splice(i, 1);
          }
        }
        this.setState({quizzes})
        if (this.state.quizzes.length) {
          localStorage.setItem('quizId', JSON.stringify({id: this.state.quizzes[0].id}))
          this.setState({emptyQuiz: false})
        } else {
          localStorage.clear();
          this.setState({emptyQuiz: true})
        }
      }
    })
    this.closeModalHandler();
  }
  createQuiz = val => {
    const quizzes = [...this.state.quizzes];
    postQuiz(val).then(res => {
      if (res.status && res.status.toUpperCase() === 'OK') {
        getQuizzes().then(res => {
          this.setState({quizzes: res.response})
          localStorage.setItem('quizId', JSON.stringify({id: this.state.quizzes[0].id}))
          this.setState({emptyQuiz: false})
        })
        this.setState({quizzes})
      }
    });
  }
  updateChanges = (quizId, value) => {
    const quizzes = [...this.state.quizzes];
    updateQuiz(quizId, value).then(res => {
      if (res.status.toUpperCase() === 'OK') {
        // eslint-disable-next-line array-callback-return
        quizzes.map(quiz => {
          if (quiz.id === quizId) {
            quiz.name = value
          }
        })
        this.setState({quizzes});
      }
    })

  }

  // Functions for Questions and Answers
  AnswerType = (type) => {
    this.setState({answerType: type});
  }
  getSomeQuestions = (id) => {
    getQuestions(id).then(res => {
      this.setState({questions: res.questions})
    })
  }
  createQuestion = (data) => {
    const question = {
      name: data.question,
      typeAnswer: data.typeAnswer,
      quizId: JSON.parse(localStorage.getItem('quizId')).id
    }
    postQuestion(question).then(res => {
      let questions = [...this.state.questions];
      questions.push(res.response);
      this.setState({questions})
      // eslint-disable-next-line array-callback-return
      data.answers.map((answer, index) => {

        if (data.typeAnswer !== 'write-code') {
          let newAnswer = {
            name: answer,
            trueAnswer: data.trueAnswer[index],
            questionId: res.response.id
          }
          postAnswer(newAnswer).then(() => {
            this.setState({create_question_res: true})
          }).catch(() => {
            this.setState({create_question_res: false})
          })
        }

      })
      this.setState({create_question_res: true})
    }).catch(() => {
      this.setState({create_question_res: false})
    })

    setTimeout(() => {
      this.setState({create_question_res: false})
    }, 2000)
  }
  deleteQuestion = (questionId) => {
    const questions = [...this.state.questions];
    destroyQuestion(questionId).then(res => {
      if (res.status.toUpperCase() === 'OK') {
        for (let i = 0; i < questions.length; ++i) {
          if (questions[i].id === questionId) {
            questions.splice(i, 1);
          }
        }
        this.setState({questions})
      }
    })

    this.closeModalHandler();
  }
  getSomeAnswers = (questionId, questionName, questionTypeAnswer) => {
    getAnswers(questionId).then(res => {
      let answers = [];
      if (res.answers.length) {
        answers = res.answers;
      } else {
        answers = [
          {name: '', trueAnswer: false, questionId: questionId, id: -1},
          {name: '', trueAnswer: false, questionId: questionId, id: -1},
          {name: '', trueAnswer: false, questionId: questionId, id: -1},
          {name: '', trueAnswer: false, questionId: questionId, id: -1}]
      }
      this.setState({
        answers: answers,
        question: {
          questionId: questionId,
          name: questionName,
          typeAnswer: questionTypeAnswer
        }
      })
    })
  }
  updateAnswersIntoState = (data) => {
    this.setState({question: data.question, answers: data.answers})
  }
  saveQuestionUpdate = (data) => {
    if (data.question.typeAnswer === 'write-code') {
      destroyAnswer(data.question.questionId).then(r => {
        if (r.status && r.status.toUpperCase() === 'OK') {
          updateQuestion(data.question).then(r => {
            if (r.status && r.status.toUpperCase() === 'OK') {
              const questions = [...this.state.questions];
              // eslint-disable-next-line array-callback-return
              questions.map((que) => {
                if (que.id === data.question.id) {
                  que.typeAnswer = data.question.typeAnswer
                  que.name = data.question.name
                }
              })
              this.setState({questions: questions, updateQuestionRes: true})
            } else {
              this.setState({updateQuestionRes: false})
            }
          })
        } else {
          this.setState({updateQuestionRes: false})
        }
      })
    } else {
      updateQuestion(data.question).then(res => {
        let newAnswers = [...this.state.answers]
        if (res.status && res.status.toUpperCase() === 'OK') {
          let questions = [...this.state.questions]
          // eslint-disable-next-line array-callback-return
          questions.map(question => {
            if (question.id === data.question.id) {
              question.typeAnswer = data.question.typeAnswer
              question.name = data.question.name
            }
          })
          this.setState({questions})
          if (data.answers[0].id !== -1) {
            // eslint-disable-next-line array-callback-return
            data.answers.map((answer, index) => {
              updateAnswers(answer).then(r => {
                if (r.status && r.status.toUpperCase() === 'OK') {
                  newAnswers[index] = answer;
                  this.setState({updateQuestionRes: true})
                } else {
                  this.setState({updateQuestionRes: false})
                }
              })
            })
          } else {
            // eslint-disable-next-line array-callback-return
            data.answers.map((answer, index) => {
              postAnswer(answer).then(r => {
                if (r.status && r.status.toUpperCase() === 'OK') {
                  newAnswers[index] = r.answer
                  this.setState({updateQuestionRes: true})
                } else {
                  this.setState({updateQuestionRes: false})
                }
              })
            })
          }
        } else {
          this.setState({updateQuestionRes: false})
        }
        this.setState({answers: newAnswers})
      })
    }

    setTimeout(() => {
      this.setState({updateQuestionRes: false})
    }, 2000)
  }


  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>


            <Route exact path='/admin/create/question' render={() => <CreateAnswer
              state={this.state}
              AnswerType={this.AnswerType}
              createQuestion={this.createQuestion}
            />}/>
            <Route exact path='/admin/update/question/' render={() => <UpdateAnswer
              state={this.state}
              updateAnswersIntoState={this.updateAnswersIntoState}
              saveQuestionUpdate={this.saveQuestionUpdate}
            />
            }/>
            <Route exact path={'/admin'} render={() => {
              if (localStorage.getItem('adminToken') && localStorage.getItem('adminId')) {
                return <Admin
                  state={this.state}
                  getSomeAnswers={this.getSomeAnswers}
                  getSomeQuestions={this.getSomeQuestions}
                  deleteQuiz={this.deleteQuiz}
                  createQuiz={this.createQuiz}
                  updateChanges={this.updateChanges}
                  openModalHandler={this.openModalHandler}/>
              } else {
                return <Redirect to='/login'/>
              }
            }}/>


            <Route exact path="/login" name="Login Page" render={props => <Login
              {...props}
              loginUser={this.loginUser}
              state={this.state}
            />}/>
            <Route exact path="/register" name='Register Page' render={props => <Register
              state={this.state}
              createUser={this.createUser}
              {...props}
            />}/>
            <Route exact path="/" name='Home Page' render={props => <Home
              state={this.state}
              {...props}
            />}/>
            <Route exact path="/setting" name='Setting Page' render={props => <Setting
              state={this.state}
              changeUserData={this.changeUserData}
              {...props}
            />}/>
            <Route exact path="/hello-world" name='hello-world Page' render={props => <HelloWorld
              state={this.state}
              {...props}
            />}/>
            <Route exact path="/variables" name='variables Page' render={props => <Variables
              state={this.state}
              {...props}
            />}/>
            <Route exact path="/data-types" name='data types Page' render={props => <DataTypes
              state={this.state}
              {...props}
            />}/>
            <Route exact path="/code-structure" name='code-structure Page' render={props => <CodeStructure
              state={this.state}
              {...props}
            />}/>

            <Route render={() => <Page404 state={this.state}/>}/>


          </Switch>
        </BrowserRouter>
        <Modal
          className="modal"
          state={this.state}
          close={this.closeModalHandler}
          closeModalHandler={this.closeModalHandler}
          deleteQuiz={this.deleteQuiz}
          deleteQuestion={this.deleteQuestion}
        >
        </Modal>
      </>
    );
  }
}

export default App;

import './Answer.css'
import {faChevronLeft, faHome} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreateAnswer = (props) => {
  const question = {
    trueAnswer: [false, false, false, false],
    answers: []
  }
  const history = useHistory()
  const questionRef = React.createRef();
  const typeAnswerRef = React.createRef();
  const answersRefs = React.useRef([]);

  answersRefs.current = [0, 0, 0, 0].map(
    (ref, index) => answersRefs.current[index] = React.createRef()
  )

  function createQuestion(e) {
    e.preventDefault();
    let validate = true;
    let answers = [];
    if (!localStorage.getItem('quizId') || JSON.parse(localStorage.getItem('quizId')).id === 0) {
      return document.getElementById('quiz-warning').style.display = 'block';
    }
    document.getElementById('quiz-warning').style.display = 'none';
    if (!questionRef.current.value) {
      validate = false;
      document.getElementById('question-warning').style.display = 'block'
    } else {
      validate = true;
      question.question = questionRef.current.value;
    }

    if (validate) validate = true;
    // if (typeAnswerRef.current.value !== 'write-code') {
    answersRefs.current.map(answer => {
      if (!answer.current.value) {
        validate = false;
      } else {
        answers.push(answer.current.value)
      }
    })
    // }
    if (!validate) {
      document.getElementById('warning-answer').style.display = 'block'
    } else {
      question.typeAnswer = typeAnswerRef.current.value;
      question.answers = answers;
      props.createQuestion(question)

      e.target.reset();
    }
  }

  function knowAnswerType(e) {
    // props.AnswerType(e.target.value)
    // if (e.target.value === 'write-code') {
    //     document.getElementById('answer-div').style.height = '0'
    // } else {
    //     document.getElementById('answer-div').style.height = '360px'
    // }
  }

  return (
    <div className='create-container'>

      <div className='go-to-back'>
        <button className="" onClick={() => {
          history.goBack()
        }}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <Link to='/admin'>
          <button className="">
            <FontAwesomeIcon icon={faHome}/>
          </button>
        </Link>
      </div>
      <div className="create-question-inputs">
        <div className={`alert ${props.state.create_question_res ? 'alert-success' : 'alert-danger'}`} style={{
          height: props.state.create_question_res ? '70px' : '0',
          opacity: props.state.create_question_res ? '1' : '0'
        }}>
          Created successfully
        </div>
        <div id='quiz-warning'><span>There in not quiz !!!</span></div>
        <form onSubmit={createQuestion}>
          <label htmlFor="question"><span>*</span>Question</label>
          <span id="question-warning">It can not be empty !</span>
          <input type="text" name='question' id='question' ref={questionRef}
                 onChange={(e) => {
                   if (e.target.value) {
                     document.getElementById('question-warning').style.display = 'none'
                   } else {
                     document.getElementById('question-warning').style.display = 'block'
                   }
                 }}/>
          <br/>
          <label htmlFor="type-answer">Type Answer</label>
          <select name="type-answer" id="type-answer"
                  onChange={knowAnswerType}
                  ref={typeAnswerRef}>
            <option value="check-box">Check-box</option>
            <option value="radio">Radio</option>
          </select>
          <br/>

          <div id='answer-div'>
            <label htmlFor="answer"><span>*</span>
              Answers (You must put 4 answers and do not forget to choose a true answer or answers)
            </label>
            <span id='warning-answer'>Can not be any empty input or inputs</span>
            {answersRefs.current.map((answer, index) => {
              return (<div key={index}>
                  <div className='index-answer'>{index + 1}</div>
                  <input type="text" name='answer' className='answer'
                         ref={answersRefs.current[index]}
                         onChange={(e) => {
                           if (e.target.value) {
                             document.getElementById('warning-answer').style.display = 'none'
                           } else {
                             document.getElementById('warning-answer').style.display = 'block'
                           }
                         }}
                  />
                  <input className='choose-true-answer'
                         value={index}
                         type={props.state.answerType === 'check-box' ? 'checkbox' : 'radio'}
                         name='answer' onChange={(e) => {
                    question.trueAnswer[e.target.value] = !question.trueAnswer[e.target.value];
                  }}/>
                </div>
              )
            })}
          </div>
          <br/>
          <button type='submit' className='create-question-button'>Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAnswer;

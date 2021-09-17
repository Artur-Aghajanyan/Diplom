import './Answer.css'
import {faChevronLeft, faExclamationTriangle, faHome} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UpdateAnswer = (props) => {
    const [res, setRes] = useState(false);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const id = query.get('id')
    const name = query.get('name')
    const [resUpdate, setResUpdate] = useState(true);
    const history = useHistory()
    const questionRef = React.createRef();
    const typeAnswerRef = React.createRef();
    const answersRefs = React.useRef([]);
    const data = {answers: props.state.answers, question: props.state.question}
    useEffect(() => {
        props.state.questions.map(question => {
            if (question.id === +id && question.name === name) {
                setRes(true)
            }
        })
    })
    const updateValue = (index, name, value) => {
        if (name.toLowerCase() === 'question') {
            data.question.name = value;
            props.updateAnswersIntoState(data)
        } else if (name.toLowerCase() === 'type-answer') {
            data.question.typeAnswer = value;
            props.updateAnswersIntoState(data)
        } else if (name.toLowerCase() === 'answer') {
            data.answers[index].name = value;
            props.updateAnswersIntoState(data)
        } else {
            data.answers[index].trueAnswer = !data.answers[index].trueAnswer;
            props.updateAnswersIntoState(data)
        }
    }

    function knowAnswerType(e) {
        if (e.target.value === 'write-code') {

            document.getElementById('answer-div').style.height = '0'
        } else {

            props.updateAnswersIntoState(data)
            document.getElementById('answer-div').style.height = '360px'
        }
    }

    function saveChange(e) {
        e.preventDefault();
        if (data.question.name) {
            if (data.question.typeAnswer === 'write-code') {
                setResUpdate(true);
                props.saveQuestionUpdate(data)
            } else if (data.answers[0].name && data.answers[1].name && data.answers[2].name && data.answers[3].name) {
                setResUpdate(true);
                props.saveQuestionUpdate(data)
            } else {
                setResUpdate(false);
            }
        } else {
            setResUpdate(false);
        }
        setTimeout(() => {
            setResUpdate(true);
        }, 2000)
    }

    return (
        <div className='create-container'>

            <div className='go-to-back'>
                <button className="" onClick={() => {
                    history.goBack()
                }}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button className="" onClick={() => {
                    history.push('/admin')
                }}>
                    <FontAwesomeIcon icon={faHome}/>
                </button>
            </div>
            {res ?
                <div className="create-question-inputs">
                    <div className="alert alert-success" style={{
                        height: props.state.updateQuestionRes ? '70px' : '0',
                        opacity: props.state.updateQuestionRes ? '1' : '0'
                    }}>
                        Updated successfully
                    </div>
                    <div className="alert error" style={{
                        height: !resUpdate ? '70px' : '0',
                        opacity: !resUpdate ? '1' : '0'
                    }}>
                        Can not Update
                    </div>
                    <form onSubmit={(e) => {
                        saveChange(e)
                    }}>
                        <label htmlFor="question"><span>*</span>Question</label>
                        <span id="question-warning">It can not be empty !</span>
                        <input type="text" name='question' id='question' ref={questionRef}
                               value={props.state.question.name}
                               onChange={(e) => {
                                   if (e.target.value) {
                                       document.getElementById('question-warning').style.display = 'none'
                                   } else {
                                       document.getElementById('question-warning').style.display = 'block'
                                   }
                                   updateValue(-1, 'question', e.target.value)
                               }}/>
                        <br/>
                        <label htmlFor="type-answer">Type Answer</label>
                        <select name="type-answer" id="type-answer"
                                aria-selected={props.state.question.typeAnswer}
                                value={props.state.question.typeAnswer}
                                onChange={(e) => {
                                    updateValue(-1, 'type-answer', e.target.value);
                                    knowAnswerType(e)
                                }}
                                ref={typeAnswerRef}>
                            <option value="check-box">Check-box</option>
                            <option value="radio">Radio</option>
                            <option value="write-code">Write code</option>
                        </select>
                        <br/>

                        <div id='answer-div' style={{
                            height: props.state.question.typeAnswer === 'write-code' ? '0' : '360px'
                        }}>
                            <label htmlFor="answer"><span>*</span>
                                Answers (You must put 4 answers and do not forget to choose a true answer or answers)
                            </label>
                            <span id='warning-answer'>Can not be any empty input or inputs</span>
                            {props.state.answers.map((answer, index) => {
                                return (<div key={index}>
                                        <div className='index-answer'>{index + 1}</div>
                                        <input type="text" name='answer' className='answer'
                                               value={answer.name}
                                               ref={answersRefs.current[index]}
                                               onChange={(e) => {
                                                   if (e.target.value) {
                                                       document.getElementById('warning-answer').style.display = 'none'
                                                   } else {
                                                       document.getElementById('warning-answer').style.display = 'block'
                                                   }
                                                   updateValue(index, 'answer', e.target.value);
                                               }}
                                        />
                                        <input className='choose-true-answer'
                                               value={index}
                                               checked={answer.trueAnswer}
                                               type={props.state.question.typeAnswer === 'check-box' ? 'checkbox' : 'radio'}
                                               name='answer' onChange={() => {
                                            updateValue(index, 'true-answer', -1);
                                        }}/>
                                    </div>
                                )
                            })}
                        </div>
                        <br/>
                        <button type='submit' className='update-question-button'>Update
                        </button>
                    </form>
                </div> : <div className='not-found'>
                    <FontAwesomeIcon className='' icon={faExclamationTriangle}/>
                    <span>Ooops Can not found question</span>
                </div>}
        </div>
    )

}

export default UpdateAnswer;

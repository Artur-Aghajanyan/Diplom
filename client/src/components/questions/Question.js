import './Question.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faPencilAlt, faPlus, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useHistory} from "react-router-dom";

const Home = (props) => {
    const history = useHistory();
    return (
        <div className='question-container'>
            <header>
                <span> Questions </span>
            </header>
            {!props.state.emptyQuiz &&
            (<div className='content'>
                <div className='add-question'>
                    <button onClick={() => {
                        history.push(`/create/question`)
                    }}>
                        <FontAwesomeIcon icon={faPlus}/> Add Question
                    </button>
                </div>
                <div className="body">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr className='questions-title'>
                            <th>#</th>
                            <th className='question-name'>Question</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.state.questions.length ? props.state.questions.map((question, index) => {
                            return (
                                <tr className="question" key={question.id}>
                                    <th>{index + 1}</th>
                                    <td>{question.name}</td>
                                    <td className='question-buttons'>
                                        <button className='update' onClick={() => {
                                            props.getSomeAnswers(question.id, question.name, question.typeAnswer)
                                            setTimeout(() => {

                                                history.push(`/update/question?name=${question.name}&id=${question.id}`)
                                            }, 200)
                                        }}>
                                            <FontAwesomeIcon icon={faPencilAlt}/>
                                        </button>
                                        <button className='delete' onClick={() => {
                                            props.openModalHandler(question.id, `Delete question ${question.name}`, 'question')
                                        }}>
                                            <FontAwesomeIcon icon={faPowerOff}/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }) : <tr>
                            <th colSpan='3' className='there-is-not-question'>
                                <div className='there-is-not-icon'>
                                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                                </div>
                                There in not question
                            </th>
                        </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default Home;
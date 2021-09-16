import './Quiz.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencilAlt, faPowerOff, faWindowClose, faPlus, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import {Link} from "react-router-dom";

class Quiz extends React.Component {
    componentDidMount() {
        if (this.props.state.quizzes.length) {
            localStorage.setItem('quizId', JSON.stringify({id:this.props.state.quizzes[0].id}))
        }
    }

    selectQuiz(index, id) {
        this.props.getSomeQuestions(id);
        if(id !== 0)
            localStorage.setItem('quizId', JSON.stringify({id}));
        let LIs = document.getElementsByTagName('li');
        if(index !== -1) LIs[index].classList.add('active');
        for (let i = 0; i < LIs.length; ++i) {
            if (LIs[i].classList.contains('active') && i !== index) {
                return document.getElementById(LIs[i].id).classList.remove('active');
            }
        }

    }

    addQuiz() {
        document.getElementById('add-quiz-input').style.height = '75px';
    }

    closeInput() {
        document.getElementById('add-quiz-input').style.height = '0';
    }

    createQuiz = () => {
        let val = document.getElementById('quiz-input');
        if (val.value) {
            let ex = false;
            this.props.state.quizzes.map((quiz) => {
                if (quiz.name === val.value) {
                    ex = true;
                }
            })
            if (!ex) {
                this.props.createQuiz(val.value);
                document.getElementById('quiz-input').value = '';
            } else {
                this.exValue();
            }
        } else {
            val.setAttribute('placeholder', 'It is empty!')
            val.classList.add('validate');
        }
    }

    changePlaceholder() {
        let val = document.getElementById('quiz-input');
        val.setAttribute('placeholder', '')
    }

    exValue() {
        let val = document.getElementById('quiz-input');
        val.value = '';
        val.classList.add('validate');
        val.setAttribute('placeholder', 'There is such a quiz!');
    }

    updateQuiz(index) {
        document.getElementsByClassName('quiz-update-input')[index].style.display = 'inline-block';
        document.getElementsByClassName('quiz-links')[index].style.display = 'none';
        document.getElementsByClassName('delete')[index].style.display = 'none';

        document.getElementsByClassName('close-change-input')[index].style.display = 'inline-block';
        document.getElementsByClassName('update')[index].style.display = 'none';
    }

    updateChanges = (index) => {
        document.getElementsByClassName('quiz-update-input')[index].style.display = 'none';
        document.getElementsByClassName('quiz-links')[index].style.display = 'inline-block';
        document.getElementsByClassName('delete')[index].style.display = 'inline-block';

        document.getElementsByClassName('close-change-input')[index].style.display = 'none';
        document.getElementsByClassName('update')[index].style.display = 'inline-block';
    }

    saveChanges = (index, quizId) => {
        let value = document.getElementsByClassName('quiz-update-input')[index].value;
        this.props.updateChanges(quizId, value);
    }

    render() {
        return (
            <div className='quiz-container'>
                <header>
                    <span> Quizzes </span>
                </header>
                <div className="add-quiz">
                    <button onClick={this.addQuiz}>
                        <FontAwesomeIcon icon={faPlus}/> Add Quiz
                    </button>
                    <div id='add-quiz-input'>
                        <input type="text" id='quiz-input' autoComplete='off' placeholder='' onFocus={this.changePlaceholder}/>
                        <button className='add' type='submit' onClick={this.createQuiz}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button className='close' onClick={this.closeInput}>
                            <FontAwesomeIcon icon={faWindowClose}/>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <ul>
                        {this.props.state.quizzes.length === 0 ?
                            <div className='quiz-alert'>
                                <FontAwesomeIcon icon={faExclamationTriangle}/>
                                <p>There is no quiz</p>
                            </div> :
                            this.props.state.quizzes.map((quiz, index) => {
                                return (
                                    <li className={index === 0? 'active' : ''} id={quiz.id} key={quiz.id}>
                                        <input value={quiz.name} type='text'
                                               onChange={() => {
                                                   this.saveChanges(index, quiz.id);
                                               }}
                                               className='quiz-update-input'/>
                                        <Link className='quiz-links' to={`/`} onClick={() => {
                                            this.selectQuiz(index, quiz.id)
                                        }}> {quiz.name} </Link>
                                        <div className="update-delete">
                                            <button className='update' onClick={() => {
                                                this.updateQuiz(index)
                                            }}>
                                                <FontAwesomeIcon icon={faPencilAlt}/>
                                            </button>
                                            <button className='close-change-input' onClick={() => {
                                                this.updateChanges(index);
                                            }}>
                                                <FontAwesomeIcon icon={faWindowClose}/>
                                            </button>
                                            <button className='delete' onClick={() => {
                                                this.props.openModalHandler(quiz.id, `Delete quiz ${quiz.name}`, 'quiz')
                                                this.selectQuiz(0, 0)
                                            }}>
                                                <FontAwesomeIcon icon={faPowerOff}/>
                                            </button>
                                        </div>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Quiz;
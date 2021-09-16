import Quiz from './quizzes/Quiz'
import Question from './questions/Question'
import './Admin.css'
import {Component} from "react";
// import {Redirect} from "react-router-dom";
class Admin extends Component {
  // componentDidMount() {
  //   if (!localStorage.getItem('adminToken') && !localStorage.getItem('adminId')) {
  //     // eslint-disable-next-line react/no-direct-mutation-state
  //     this.state.loggedIn = false;
  //   }
  // }

  render() {
    // if (!this.state.loggedIn)
    //   return <Redirect to='/login'/>;
    // else
      return (
        <div className='home-container'>
          <Quiz
            state={this.props.state}
            getSomeQuestions={this.props.getSomeQuestions}
            createQuiz={this.props.createQuiz}
            updateChanges={this.props.updateChanges}
            openModalHandler={this.props.openModalHandler}
          />
          <Question
            state={this.props.state}
            getSomeAnswers={this.props.getSomeAnswers}
            openModalHandler={this.props.openModalHandler}/>
        </div>
      )
  }
}

export default Admin;

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './views/pages/register/Register';
import Home from './views/pages/home/Home';
import Page404 from './views/pages/page404/Page404';
import Login from './views/pages/login/Login';
import TheLayout from './containers/TheLayout';
import {getUser, postUser, resetUserName, resetUserPassword, resetUserSurname} from './api'
import './scss/style.scss';
import Setting from "./views/users/Setting";
import HelloWorld from "./views/pages/HelloWorld";
import CodeStructure from "./views/pages/CodeStructure";

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
    responseRegister: {}
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
        localStorage.setItem('token', JSON.stringify(r.token));
        localStorage.setItem('id', JSON.stringify(r.user.id));
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
          this.setState({statusUpdate:false});
        });
    }else if (user.surname) {
      resetUserSurname(user).then(res => res.json()).then(r => {
        this.setState({user: r});
        this.setState({statusUpdate: true})
      })
        .catch(() => {
          this.setState({statusUpdate:false});
        });
    }
    else if (user.password) {
      resetUserPassword(user).then(res => res.json()).then(r => {
        this.setState({user: r});
        this.setState({statusUpdate: true})
      })
        .catch(() => {
          this.setState({statusUpdate:false});
        });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
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
          <Route exact path="/code-structure" name='code-structure Page' render={props => <CodeStructure
            state={this.state}
            {...props}
          />}/>

          <Route path="/admin" name="Home" render={props => <TheLayout {...props}/>}/>
          <Route render={() => <Page404 state={this.state}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

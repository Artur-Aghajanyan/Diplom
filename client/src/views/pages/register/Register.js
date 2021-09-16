import React, {useEffect, useState} from 'react'
import './Register.css';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CLabel,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Header from "../../users/Header";
import validator from "validator";
import {useHistory} from "react-router-dom";

const Register = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/');
    }
  });

  // props.state.responseRegister = {status: 'Can not Create User'}
  function createUser(e) {
    e.preventDefault();
    document.getElementById('alert_repeated_incorrectly').style.opacity = '0'
    if (password !== repeat_password) {
      document.getElementById('alert_repeated_incorrectly').style.opacity = '1'
    } else if (name && surname && email && password && repeat_password) {
      props.state.register = {name, surname, email, password};
      props.createUser();
      document.getElementById('can_not_create').style.opacity = '1';
    } else {
      props.state.responseRegister = {status: 'Can not Create User'};
      document.getElementById('can_not_create').style.opacity = '1';
    }
    setTimeout(() => {
      document.getElementById('can_not_create').style.opacity = '0';
      if(JSON.parse(localStorage.getItem('status')) === 'Created successful'){
        localStorage.removeItem('status');
        history.push('/login');
      }
    }, 1500);
  }
  return (
    <>
      <Header state = {props.state}/>
      <CAlert className={props.state.responseRegister.status === 'Created successful' ?
        'alert-success w-50 m-auto text-center' : `alert-danger w-50 m-auto text-center`}
              id='can_not_create'>{props.state.responseRegister.status}</CAlert>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={createUser}>
                  <h1>Register</h1>
                  <p className="text-muted mb-0">Create your account</p>
                  <CLabel className='alert-danger'
                          id='alert_empty_name_or_surname'>
                    Can not be empty name or surname
                  </CLabel>
                  <CInputGroup className="mb-1">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text"
                            placeholder="Name"
                            name='name'
                            autoComplete="name"
                            onChange={e => {
                              if (e.target.value === '') {
                                setName("");
                                document.getElementById('alert_empty_name_or_surname').style.opacity = '1';
                              } else {
                                setName(e.target.value);
                                document.getElementById('alert_empty_name_or_surname').style.opacity = '0'
                              }
                            }}
                    />
                    <CInput type="text"
                            placeholder="Surname"
                            name='surname'
                            autoComplete="surname"
                            onChange={e => {
                              if (e.target.value === '') {
                                setSurname("")
                                document.getElementById('alert_empty_name_or_surname').style.opacity = '1';
                              } else {
                                setSurname(e.target.value)
                                document.getElementById('alert_empty_name_or_surname').style.opacity = '0'
                              }
                            }}
                    />
                  </CInputGroup>
                  <CLabel className='alert-danger mb-0' id='alert_not_email'>
                    This is not email
                  </CLabel>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text"
                            placeholder="Email"
                            name='email'
                            autoComplete="email"
                            onChange={e => {
                              if (validator.isEmail(e.target.value)) {
                                setEmail(e.target.value)
                                document.getElementById('alert_not_email').style.opacity = '0'
                              } else {
                                setEmail("");
                                document.getElementById('alert_not_email').style.opacity = '1'
                              }
                            }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-1.5">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password"
                            placeholder="Password" name='password'
                            autoComplete="new-password"
                            minLength='6'
                            onChange={e => {
                              if (e.target.value.length >= 6) {
                                setPassword(e.target.value);
                              } else {
                                setPassword("");
                              }
                            }}
                    />
                  </CInputGroup>
                  <CLabel className='alert-danger'
                          id='alert_repeated_incorrectly'>
                    Repeated the password incorrectly
                  </CLabel>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password"
                            placeholder="Repeat password"
                            name='password_repeat'
                            minLength='6'
                            autoComplete="new-password"
                            onChange={e => {
                              if (e.target.value.length >= 6 && e.target.value === password) {
                                setRepeatPassword(e.target.value);
                                document.getElementById('alert_repeated_incorrectly').style.opacity = '0';
                              } else if (e.target.value.length >= 6) {
                                document.getElementById('alert_repeated_incorrectly').style.opacity = '1';
                                setRepeatPassword("");
                              } else {
                                document.getElementById('alert_repeated_incorrectly').style.opacity = '0';
                                setRepeatPassword('');
                              }
                            }}
                    />
                  </CInputGroup>
                  <CButton color="success" type='submit' block>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Register

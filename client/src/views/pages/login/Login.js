import React, {useEffect, useState} from 'react'
import './Login.css'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText, CLabel,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Header from "../../users/Header";
import {useHistory} from "react-router-dom";
import validator from "validator";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/');
    }
  });

  function LoginUser(e) {
    e.preventDefault();
    if (email && password) {
      props.loginUser({email, password});
    }
    if(!props.state.user.token){
      document.getElementById('can_not_login').style.opacity = '1';
    }
  }
  return (
    <>
      <Header state={props.state}/>
      <CAlert className= {props.state.user.token ?
        'alert-success w-50 m-auto text-center' : `alert-danger w-50 m-auto text-center`}
              id='can_not_login'>{props.state.user.token ? "Login successful" : 'Incorrect Email or Password'}</CAlert>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={LoginUser}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CLabel className='alert-danger mb-0' id='alert_not_email'>
                      This is not email
                    </CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email"
                              onChange={(e) => {
                                if (validator.isEmail(e.target.value)) {
                                  setEmail(e.target.value)
                                  document.getElementById('alert_not_email').style.opacity = '0'
                                } else {
                                  setEmail("");
                                  document.getElementById('alert_not_email').style.opacity = '1'
                                }
                              }}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password"
                              autoComplete="password"
                              placeholder="Password"
                              minLength='6'
                              onChange={(e) => {
                                if (e.target.value.length >= 6) {
                                  setPassword(e.target.value);
                                } else {
                                  setPassword("");
                                }
                              }}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type='submit' block>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Login

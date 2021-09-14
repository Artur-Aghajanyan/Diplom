import React, {useState} from 'react'
import '../pages/register/Register.css'
import {
  CButton,
  CCard,
  CCardBody,
  CCollapse,
  CCardHeader,
  CAlert, CInputGroupPrepend, CInputGroupText, CInput,
  CInputGroup, CLabel, CForm
} from '@coreui/react'
import Header from "./Header";
import CIcon from "@coreui/icons-react";


const Setting = (props) => {
  // const history = useHistory();
  const [name, setName] = useState(false)
  const [surname, setSurname] = useState(false)
  const [password, setPassword] = useState(false)

  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");

  return (
    <>
      <Header state={props.state}/>

      <CAlert className={props.state.statusUpdate ?
        'alert-success w-50 m-auto text-center' : `alert-danger w-50 m-auto text-center`}
              id='update_alert'>{props.state.statusUpdate ? "Updated successful" : "Can not update"}</CAlert>

      <CCard>
        <CCardHeader className='h5'>
          <CButton
            color="btn btn-outline-info"
            onClick={(e) => {
              e.preventDefault()
              setName(!name)
            }}
          >
            Reset name
          </CButton>
        </CCardHeader>
        <CCollapse show={name}>
          <CCardBody>
            <CLabel className='alert-danger'
                    id='alert_empty_name'>
              Can not be empty name
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
                      value={nameValue}
                      autoComplete="name"
                      onChange={e => {
                        if (e.target.value === '') {
                          setNameValue("");
                          document.getElementById('alert_empty_name').style.opacity = '1';
                        } else {
                          setNameValue(e.target.value);
                          document.getElementById('alert_empty_name').style.opacity = '0'
                        }
                      }}
              />
            </CInputGroup>
            <CButton
              className='mr-1'
              color="btn btn-outline-success"
              alert='Save'
              onClick={() => {
                if (nameValue) {
                  props.changeUserData({
                    name: nameValue,
                    surname: "",
                    password: "",
                    id: JSON.parse(localStorage.getItem('id'))
                  })
                  setNameValue("");
                }
                document.getElementById('update_alert').style.opacity = '1';
                setTimeout(() => {
                  document.getElementById('update_alert').style.opacity = '0';
                }, 1500)
              }}
            >
              <CIcon name='cil-check'/>
            </CButton>
            <CButton
              color="btn btn-outline-danger"
            >
              <CIcon name='cil-x'/>
            </CButton>
          </CCardBody>
        </CCollapse>
        <CCardHeader className='h5'>
          <CButton
            color="btn btn-outline-info"
            onClick={(e) => {
              e.preventDefault()
              setSurname(!surname)
            }}
          >
            Reset surname
          </CButton>
        </CCardHeader>
        <CCollapse show={surname}>
          <CCardBody>
            <CLabel className='alert-danger'
                    id='alert_empty_surname'>
              Can not be empty surname
            </CLabel>
            <CInputGroup className="mb-1">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-user"/>
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput type="text"
                      placeholder="Surname"
                      name='surname'
                      value={surnameValue}
                      autoComplete="surname"
                      onChange={(e) => {
                        if (e.target.value === '') {
                          setSurnameValue("");
                          document.getElementById('alert_empty_surname').style.opacity = '1';
                        } else {
                          setSurnameValue(e.target.value);
                          document.getElementById('alert_empty_surname').style.opacity = '0'
                        }
                      }}
              />
            </CInputGroup>
            <CButton
              className='mr-1'
              color="btn btn-outline-success"
              alert='Save'
              onClick={() => {
                if (surnameValue) {
                  props.changeUserData({
                    name: "",
                    surname: surnameValue,
                    password: "",
                    id: JSON.parse(localStorage.getItem('id'))
                  })
                  setSurnameValue("");
                }
                document.getElementById('update_alert').style.opacity = '1';
                setTimeout(() => {
                  document.getElementById('update_alert').style.opacity = '0';
                }, 1500)
              }}
            >
              <CIcon name='cil-check'/>
            </CButton>
            <CButton
              color="btn btn-outline-danger"
            >
              <CIcon name='cil-x'/>
            </CButton>
          </CCardBody>
        </CCollapse>
        <CCardHeader className='h5'>
          <CButton
            color="btn btn-outline-info"
            onClick={(e) => {
              e.preventDefault()
              setPassword(!password)
            }}
          >
            Reset password
          </CButton>
        </CCardHeader>
        <CCollapse show={password}>
          <CCardBody>
            <CForm>
              <CInputGroup className="mb-1.5">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-lock-locked"/>
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput type="password"
                        placeholder="New Password" name='password'
                        autoComplete="new-password"
                        id='new_password'
                        minLength='6'
                        onChange={e => {
                          if (e.target.value.length >= 6) {
                            setPasswordValue(e.target.value);
                          } else {
                            setPasswordValue("");
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
                        id='password_repeat'
                        autoComplete="new-password"
                        onChange={e => {
                          if (e.target.value.length >= 6 && e.target.value === passwordValue) {
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
              <CButton
                className='mr-1'
                color="btn btn-outline-success"
                alert='Save'
                onClick={() => {
                  if (passwordValue === repeat_password) {
                    props.changeUserData({
                      name: "",
                      surname: "",
                      password: repeat_password,
                      id: JSON.parse(localStorage.getItem('id'))
                    })
                    console.log(passwordValue, ' new')
                    console.log(repeat_password, ' repeat')
                    setPasswordValue("");
                    setRepeatPassword("");
                    document.getElementById('password_repeat').value = '';
                    document.getElementById('new_password').value = '';
                  }
                  document.getElementById('update_alert').style.opacity = '1';
                  setTimeout(() => {
                    document.getElementById('update_alert').style.opacity = '0';
                  }, 1500)
                }}
              >
                <CIcon name='cil-check'/>
              </CButton>
              <CButton
                color="btn btn-outline-danger"
              >
                <CIcon name='cil-x'/>
              </CButton>
            </CForm>
          </CCardBody>
        </CCollapse>
      </CCard>
    </>
  )
}

export default Setting;

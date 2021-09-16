import React from 'react'
import Logo from '../../images/js-king.png'
import User from '../../images/user.png'
import './Header.css'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import {
  Link,
  Switch,
  Route, useHistory
} from "react-router-dom";
import {Navbar, Nav, Form, Button, Image} from 'react-bootstrap'

const Header = (props) => {
  const history = useHistory();
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand>
                <Image src={Logo} alt="" id='header_logo'/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link className='navbar_link' to="/">Home</Link>
                  <Link className='navbar_link' to="/tests">Tests</Link>
                  <a className='navbar_link' href="https://www.vsu.am/" target='_blank'>About Us</a>
                </Nav>
                <Form inline>
                  {localStorage.getItem('token') ?
                    (<>
                      <CDropdown
                        inNav
                        id='user-dropdown'
                        className="c-header-nav-items mx-2"
                        direction="down"
                      >
                        <CDropdownToggle className="c-header-nav-link" caret={false}>
                          <div className="c-avatar">
                            <CImg
                              id='user-img'
                              src={User}
                              className="c-avatar-img"
                              alt="user"
                            />
                          </div>
                        </CDropdownToggle>
                        <CDropdownMenu className="pt-0" placement="bottom-end">
                          <CDropdownItem
                            header
                            tag="div"
                            color="light"
                            className="text-center"
                          >
                            <strong>Account</strong>
                          </CDropdownItem>
                          <CDropdownItem onClick={() => {
                            history.push('/setting');
                          }}>
                            <CIcon name="cil-settings" className="mfe-2"/>
                            Setting
                          </CDropdownItem>
                          <CDropdownItem divider/>
                          <Link variant="outline-primary" to='/login' id='logout'
                                onClick={() => {
                                  localStorage.removeItem('token');
                                  localStorage.removeItem('id');
                                  props.state.user = '';
                                }}>
                            <CDropdown id='logout_dropdown'>
                              <CIcon name="cil-lock-locked" className="mfe-2" id='logout_icon'/>
                              Logout
                            </CDropdown>
                          </Link>
                        </CDropdownMenu>
                      </CDropdown>
                    </>)

                    :
                    (<><Link to='/login'>
                      <Button type='button' variant='primary'>Login</Button>
                    </Link>
                      <Link variant="outline-success" to='/register' id='sign-up'>
                        <Button type='button' variant='success'>Sign up</Button>
                      </Link></>)}
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <br/>
            <Switch>
              <Route exact path="/">
                {/*<Home />*/}
              </Route>
              <Route path="/about-us">
                {/*<AboutUs />*/}
              </Route>
              <Route path="/contact-us">
                {/*<ContactUs />*/}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

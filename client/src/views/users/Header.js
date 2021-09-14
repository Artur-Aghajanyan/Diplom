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
import {Navbar, Nav, NavDropdown, Form, Button, Image} from 'react-bootstrap'

const Header = (props) => {
  const history = useHistory();
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand>
                <Link to={`/`}>
                  <Image src={Logo} alt="" id='header_logo'/>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about-us">Contact Us</Nav.Link>
                  <Nav.Link href="/contact-us">About Us</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
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

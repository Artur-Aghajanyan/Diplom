import React from 'react'
import Header from "../users/Header";
import code1 from '../../images/Screenshot from 2021-09-17 14-25-13.png'
import code2 from '../../images/Screenshot from 2021-09-17 14-26-05.png'
import code3 from '../../images/Screenshot from 2021-09-17 14-26-07.png'
import code4 from '../../images/Screenshot from 2021-09-17 14-38-25.png'

import './Pages.css'

import {
  CCard,
  CCardBody
} from "@coreui/react";

const CodeStructure = (props) => {

  return (
    <>
      <Header state={props.state}/>
      <CCard className='m-5'>
        <CCardBody className='pl-5 ml-5 pr-5 mr-5'>
          <h1><u>Code structure</u></h1>
          <p>
            The first thing we’ll study is the building blocks of code.
          </p>
          <br/>
          <h3>Statements</h3>
          <p>Statements are syntax constructs and commands that perform actions.
            We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.
            We can have as many statements in our code as we want. Statements can be separated with a semicolon.
            For example, here we split “Hello World” into two alerts:</p>
          <img src={code1} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>Usually, statements are written on separate lines to make the code more readable:</p>
          <img src={code2} alt=""/>
          <br/>
          <br/>
          <br/>


          <h3>Semicolons</h3>
          <p>A semicolon may be omitted in most cases when a line break exists.
            <br/>
            <br/>
            This would also work:</p>
          <img src={code2} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>
            Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.
            <br/>
            <br/>
            In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!
            <br/>
            <br/>
            There are cases when a newline does not mean a semicolon. For example:
          </p>
          <img src={code3} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>
            The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+",
            then it is an “incomplete expression”, so a semicolon there would be incorrect. And in this case, that works as intended.
          </p>
          <img src={code4} alt=""/>
          <br/>
          <br/>
          <br/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CodeStructure;

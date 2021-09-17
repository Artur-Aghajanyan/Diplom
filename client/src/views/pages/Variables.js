import React from 'react'
import Header from "../users/Header";
import code1 from '../../images/Screenshot from 2021-09-17 14-51-57.png'
import code2 from '../../images/Screenshot from 2021-09-17 14-52-42.png'
import code3 from '../../images/Screenshot from 2021-09-17 14-52-44.png'
import code4 from '../../images/Screenshot from 2021-09-17 14-52-45.png'
import code5 from '../../images/Screenshot from 2021-09-17 14-52-46.png'
import code6 from '../../images/Screenshot from 2021-09-17 14-52-46-1.png'

import './Pages.css'

import {
  CCard,
  CCardBody
} from "@coreui/react";

const Variables = (props) => {

  return (
    <>
      <Header state={props.state}/>
      <CCard className='m-5'>
        <CCardBody className='pl-5 ml-5 pr-5 mr-5'>

          <h1><u>Variables</u></h1>
          <p>
            Most of the time, a JavaScript application needs to work with information. Here are two examples: <br/><br/>
            1. An online shop – the information might include goods being sold and a shopping cart. <br/>
            2. A chat application – the information might include users, messages, and much more. <br/><br/>
            Variables are used to store this information.
          </p>
          <p>But we need a working environment to run our scripts and, since this book
            is online, the browser is a good choice. We’ll keep the amount of browser-specific
            commands (like alert) to a minimum so that you don’t spend time on them if you plan to
            concentrate on another environment (like Node.js).
            We’ll focus on JavaScript in the browser in the next part of the tutorial.</p>
          <p>So first, let’s see how we attach a script to a webpage.
            For server-side environments (like Node.js), you can execute the
            script with a command like "node my.js".</p>
          <br/>
          <h3>A variable</h3>
          <p>A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
            To create a variable in JavaScript, use the let keyword.
            The statement below creates (in other words: declares) a variable with the name “message”:
          </p>
          <img src={code1} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>Now, we can put some data into it by using the assignment operator =:</p>
          <img src={code2} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>The string is now saved into the memory area associated with the variable. We can access it using the
            variable name:</p>
          <img src={code3} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>To be concise, we can combine the variable declaration and assignment into a single line:</p>
          <img src={code4} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>We can also declare multiple variables in one line:</p>
          <img src={code5} alt=""/>
          <br/>
          <br/>
          <br/><p>That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a
          single line per variable.</p>
          <p>The multiline variant is a bit longer, but easier to read:</p>
          <img src={code6} alt=""/>
          <br/>
          <br/>
          <br/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Variables;

import React from 'react'
import Header from "../users/Header";
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
          <h3><u>Statements</u></h3>
          <p>Statements are syntax constructs and commands that perform actions.
            We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.
            We can have as many statements in our code as we want. Statements can be separated with a semicolon.
            For example, here we split “Hello World” into two alerts:</p>
          <br/>
          <h6><u><b>The type attribute: {"\<script type=…\>"}</b></u></h6>
          <p>The old HTML standard, HTML4, required a script to have
            a type. Usually it was type="text/javascript". It’s not required
            anymore. Also, the modern HTML standard totally changed the meaning
            of this attribute. Now, it can be used for JavaScript modules. But that’s an advanced
            topic, we’ll talk about modules in another part of the tutorial.</p>
          <br/>
          <h6><u><b>The language attribute: {"\<script language=…\>"}</b></u></h6>
          <p>This attribute was meant to show the language of the script.
            This attribute no longer makes sense because JavaScript
            is the default language. There is no need to use it.</p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CodeStructure;

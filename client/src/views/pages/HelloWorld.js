import React from 'react'
import Header from "../users/Header";
import code1 from '../../images/Screenshot from 2021-09-17 11-25-09.png'
import code2 from '../../images/Screenshot from 2021-09-17 11-43-44.png'
import {
  CCard,
  CCardBody
} from "@coreui/react";

const HelloWorld = (props) => {

  return (
    <>
      <Header state={props.state}/>
      <CCard className='m-5'>
        <CCardBody className='pl-5 ml-5 pr-5 mr-5'>
          <h1><u>Hello, world!</u></h1>
          <p>
            This part of the tutorial is about core JavaScript, the language itself.
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
          <h3>The “script” tag</h3>
          <p>JavaScript programs can be inserted almost anywhere into an HTML document using the {"\<script\>"} tag.</p>

          <span>For instance:</span><br/>
          <img src={code1} alt=""/>
          <br/>
          <br/>
          <br/>
          <h3>Modern markup</h3>
          <p>The {"\<script\>"} tag has a few attributes that are rarely used nowadays but can still be found in old
            code:</p>
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


          <h6><u><b>Comments before and after scripts.</b></u></h6>
          <p>In really ancient books and guides, you may find comments inside {"\<script\>"} tags, like this:</p>
          <img src={code2} alt=""/>
          <br/>
          <br/>
          <br/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default HelloWorld;

import React from 'react'
import Header from "../users/Header";
import code1 from '../../images/Screenshot from 2021-09-17 15-24-57.png'
import code2 from '../../images/Screenshot from 2021-09-17 15-31-10.png'
import code3 from '../../images/Screenshot from 2021-09-17 15-34-27.png'
import code4 from '../../images/Screenshot from 2021-09-17 16-32-29.png'
import code5 from '../../images/Screenshot from 2021-09-17 16-32-31.png'
import code6 from '../../images/Screenshot from 2021-09-17 16-36-52.png'
import code7 from '../../images/Screenshot from 2021-09-17 16-36-53.png'
import code8 from '../../images/Screenshot from 2021-09-17 16-36-54.png'
import code9 from '../../images/Screenshot from 2021-09-17 16-46-07.png'

import './Pages.css'

import {
  CCard,
  CCardBody
} from "@coreui/react";

const DataTypes = (props) => {

  return (
    <>
      <Header state={props.state}/>
      <CCard className='m-5'>
        <CCardBody className='pl-5 ml-5 pr-5 mr-5'>

          <h1><u>Data types</u></h1>
          <p>
            A value in JavaScript is always of a certain type. For example, a string or a number.
            <br/>
            There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters
            we’ll talk about each of them in detail.
          </p>
          <p>Programming languages that allow such things, such as JavaScript, are called
            “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.</p>
          <br/>
          <h3>Number</h3>
          <p>A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
            To create a variable in JavaScript, use the let keyword.
            The statement below creates (in other words: declares) a variable with the name “message”:
          </p>
          <img src={code1} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>The number type represents both integer and floating point numbers.
            <br/><br/>
            There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so
            on.
            <br/><br/>
            Besides regular numbers, there are so-called “special numeric values” which also belong to this data type:
            Infinity, -Infinity and NaN.
            <br/>
            Special numeric values formally belong to the “number” type. Of course they are not numbers in the common
            sense of this word.
            <br/>
            We’ll see more about working with numbers in the chapter Numbers.
          </p>
          <br/>
          <h3>BigInt</h3>

          <p>In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s
            9007199254740991),
            or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.
            <br/><br/>
            For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or
            microsecond-precision timestamps.
            <br/>
            BigInt type was recently added to the language to represent integers of arbitrary length.
            <br/><br/>
            A BigInt value is created by appending n to the end of an integer:</p>


          <img src={code2} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>As BigInt numbers are rarely needed, we don’t cover them here, but devoted them a separate chapter BigInt.
            Read it when you need such big numbers.</p>
          <br/>

          <h3>String</h3>
          <p>A string in JavaScript must be surrounded by quotes.</p>
          <img src={code3} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>In JavaScript, there are 3 types of quotes.
            <br/><br/>
            1. Double quotes: "Hello". <br/>
            2. Single quotes: 'Hello'. <br/>
            3. Backticks: `Hello`. <br/>
          </p>

          <br/>
          <h3>Boolean (logical type)</h3>
          <p>The boolean type has only two values: true and false.
            <br/>
            This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no,
            incorrect”.
            <br/>
            For instance:
          </p>
          <br/>
          <img src={code4} alt=""/>
          <br/>
          <br/>
          <p>Boolean values also come as a result of comparisons:</p>
          <img src={code5} alt=""/>
          <br/>
          <br/>
          <br/><p>We’ll cover booleans more deeply in the chapter Logical operators.</p>
          <br/>
          <h3>The “null” value</h3>
          <p>The special null value does not belong to any of the types described above.
            <br/>
            It forms a separate type of its own which contains only the null value:</p>
          <img src={code6} alt=""/>
          <br/><br/><br/>
          <p>In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other
            languages.
            <br/>
            It’s just a special value which represents “nothing”, “empty” or “value unknown”.
            <br/>
            The code above states that age is unknown.
          </p>

          <br/>
          <h3>The “undefined” value</h3>
          <p>The special value undefined also stands apart. It makes a type of its own, just like null.
            <br/>
            The meaning of undefined is “value is not assigned”.
            <br/>
            If a variable is declared, but not assigned, then its value is undefined:
          </p>

          <img src={code7} alt=""/>
          <br/><br/><br/>
          <p>Technically, it is possible to explicitly assign undefined to a variable:</p>
          <img src={code8} alt=""/>
          <br/><br/><br/>
          <p>…But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown”
            value to a variable, while undefined is reserved as a default initial value for unassigned things.</p>

          <br/>
          <h3>Objects and Symbols</h3>
          <p>The object type is special.
            <br/>
            <br/>
            All other types are called “primitive” because their values can contain only a single thing (be it a string
            or a number or whatever).
            In contrast, objects are used to store collections of data and more complex entities.
            Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter
            Objects, after we learn more about primitives.
            <br/>
            <br/>
            The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of
            completeness
            , but also postpone the details till we know objects.
          </p>


          <h3>The typeof operators</h3>
          <p>The typeof operator returns the type of the argument. It’s useful when we want to process values of
            different types differently or just want to do a quick check.
            <br/>
            <br/>
            It supports two forms of syntax:
            <br/>
            <br/>
            1. As an operator: typeof x. <br/>
            2. As a function: typeof(x). <br/><br/>
            In other words, it works with parentheses or without them. The result is the same.
            <br/>
            <br/>
            The call to typeof x returns a string with the type name:</p>
          <img src={code9} alt=""/>
          <br/><br/><br/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default DataTypes;

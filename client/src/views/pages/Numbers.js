import React from 'react'
import Header from "../users/Header";
import code1 from '../../images/Screenshot from 2021-09-17 22-08-57.png'
import code2 from '../../images/Screenshot from 2021-09-17 22-09-00.png'
import code3 from '../../images/Screenshot from 2021-09-17 22-09-12.png'
import code4 from '../../images/Screenshot from 2021-09-17 14-52-45.png'
import code5 from '../../images/Screenshot from 2021-09-17 14-52-46.png'
import code6 from '../../images/Screenshot from 2021-09-17 14-52-46-1.png'

import './Pages.css'

import {
  CCard,
  CCardBody
} from "@coreui/react";

const Numbers = (props) => {

  return (
    <>
      <Header state={props.state}/>
      <CCard className='m-5'>
        <CCardBody className='pl-5 ml-5 pr-5 mr-5'>

          <h1><u>Numbers</u></h1>
          <p>
            In modern JavaScript, there are two types of numbers:
            <br/><br/>
            1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.
            <br/><br/>
            2. BigInt numbers, to represent integers of arbitrary length. They are
            sometimes needed, because a regular number can’t safely exceed 2<sup>53</sup> or be less than -2<sup>53</sup>.
            As bigints are used in few special areas, we devote them a special chapter BigInt. <br/><br/>
            So here we’ll talk about regular numbers. Let’s expand our knowledge of them.
          </p>
          <br/>
          <h3>More ways to write a number</h3>
          <p>Imagine we need to write 1 billion. The obvious way is:</p>
          <img src={code1} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>We also can use underscore _ as the separator:</p>
          <img src={code2} alt=""/>
          <br/>
          <br/>
          <br/>
          <p>Here the underscore _ plays the role of the “syntactic sugar”,
            it makes the number more readable. The JavaScript engine simply ignores _
            between digits, so it’s exactly the same one billion as above.
            <br/><br/>
            In real life though, we try to avoid writing long sequences of zeroes.
            We’re too lazy for that. We’ll try to write something like "1bn" for a billion or
            "7.3bn" for 7 billion 300 million. The same is true for most large numbers.
            <br/><br/>
            In other words, a negative number after "e" means a division by 1 with the given number of zeroes:
          </p>
          <img src={code3} alt=""/>
          <br/>
          <br/>
          <br/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Numbers;

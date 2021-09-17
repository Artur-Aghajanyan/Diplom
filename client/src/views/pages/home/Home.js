import React from 'react'
import Header from "../../users/Header";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import {Link} from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <Header state={props.state}/>
      <div className='m-auto w-75'>

        <CRow>
          <CCol xs="12" lg="4">
            <CCard>
              <CCardHeader>
                <h5>1. JavaScript Fundamentals</h5>
              </CCardHeader>
              <CCardBody className='ml-2'>
                1.1 <Link to='/hello-world'>Hello, world!</Link>
              </CCardBody>
              <CCardBody className='ml-2'>
                1.2 <Link to='/code-structure'>Code structure</Link>
              </CCardBody>
              <CCardBody className='ml-2'>
                1.3 <Link to='/variables'>Variables</Link>
              </CCardBody>
              <CCardBody className='ml-2'>
                1.4 <Link to='/data-types'>Data types</Link>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" lg="4">
            <CCard>
                <CCardHeader>
                  <h5>2. Data types</h5>
                </CCardHeader>
                <CCardBody className='ml-2'>
                  2.1 <Link to='/'>Numbers</Link>
                </CCardBody>
                <CCardBody className='ml-2'>
                  2.2 <Link to='/'>Methods of primitives</Link>
                </CCardBody>
                <CCardBody className='ml-2'>
                  2.3 <Link to='/'>Arrays</Link>
                </CCardBody>
                <CCardBody className='ml-2'>
                  2.4 <Link to='/'>Array methods</Link>
                </CCardBody>
            </CCard>
          </CCol>

          <CCol xs="12" lg="4">
            <CCard>
              <CCardHeader>
                <h5>3. Prototypes, inheritance</h5>
              </CCardHeader>
              <CCardBody className='ml-2'>
                3.1 <Link to='/'>Prototypal inheritance</Link>
              </CCardBody>
              <CCardBody className='ml-2'>
                3.2 <Link to='/'>F.prototype</Link>
              </CCardBody>
              <CCardBody className='ml-2'>
                3.3 <Link to='/'>Native prototypes</Link>
              </CCardBody>
              <CCardBody className='ml-2'>
                3.4 <Link to='/'>Prototype methods, objects without __proto__</Link>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  )
}

export default Home

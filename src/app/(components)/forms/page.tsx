'use client';

import styles from './page.module.scss';
import React from 'react';
import SideBar from '@/components/Side Bar/SideBar';
import { MdOutlineRoundedCorner } from "react-icons/md";
import Rounded from '@/components/Button Component/Rounded';
import { SlSizeFullscreen } from "react-icons/sl";
import Size from '@/components/Button Component/Size';
import { IoIosColorFill } from "react-icons/io";
import BColor from '@/components/Button Component/BColor';
import { RiShadowLine } from "react-icons/ri";
import Shadow from '@/components/Button Component/Shadow';
import { useTheme } from '@/components/ThemeContext';
import NavBar from '@/components/Home/NavBar/NavBar';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container-fluid h-100' >

      <div className='row my-3 ms-4'>
        <h3 className='fw-bold fs-4 fs-smx-xxl-2 mx-xl-2 mx-lg-2 mx-1 my-xxl-2 my-1 p-1  fs-md-3 fs-lg-3 fs-xl-3 fs-xxl-3'> <i className="bi bi-file-earmark-code"></i> <span>General Usage</span> </h3>
      </div>

      <div className='row my-3 ' >
        <div className={`${styles.formWrapper} col-10 m-auto rounded-2`} style={{background:'#FFF'}}>
          <div className={`${styles.formCode} row mx-0`}>

            <code className='fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6'>
              <p className={`${styles.line1}`}>{`<Form \n`}</p>

              <p className={`${styles.property}`}> {`id= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span>
              </p>

              <p className={`${styles.property}`}> {`className= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span>
              </p>

              <p className={`${styles.property}`}> {`label= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span>
              </p>

              <p className={`${styles.property}`}> {`placeholder= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span>
              </p>

              <p className={`${styles.property}`}> {`value= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String || Object`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span>
              </p>

              <p className={`${styles.property}`}> {`view= `} 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "grid" || "list"|| "modal"`}</span>{`\n`}   
              </p>

              <p className={`${styles.property}`}> {`size= `} 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "sm" || "default" || "lg"`}</span>{`\n`}  
              </p>

              <p className={`${styles.property}`}> {`disabled=` } 
                <span className={`${styles.punc}`}>{`{`}</span>  
                  <span className={`${styles.value}`}>{`boolean`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
              </p>

              <p className={`${styles.property}`}> {`inputBorder= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`boolean`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={`${styles.property}`}> {`onBlur= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`function`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>
              
              <p className={`${styles.property}`}> {`onChange= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`function`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={`${styles.property}`}> {`onFocus= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`function`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={`${styles.property}`}>
                <span className={`${styles.punc}`}>{`{`}</span> 
                  {`...props`}
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={styles.line7}>{`/Form> \n`}</p>
            </code>
          </div>
        </div>
      </div>

      <div className='row my-5 d-flex align-items-start justify-content-center' >
          
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-10 col-sm-11 col-md-11 col-11 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white py-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2">
              <i className="bi bi-card-checklist fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1"></i>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>view</p>
              <p className='p-0 m-0'>Form</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-searchbar--rounded-pill' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5">
            <div className='col-12 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6 rounded-0 d-flex flex-column align-items-center justify-content-start my-2'>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="fName" className='w-25'>First Name</label>
                <input type="text" id='fName' placeholder='list view...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="lName" className='w-25'>Last Name</label>
                <input type="text" id='lName' placeholder='list view...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="email" className='w-25'>Email</label>
                <input type="text" id='email' placeholder='list view...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="pw" className='w-25'>Password</label>
                <input type="password" id='pw' placeholder='list view...' className='w-50'/>
              </div>
            </div>

            <div className='col-12 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6 rounded-0 d-grid align-items-center justify-content-start my-2 px-0' style={{gridTemplateColumns:'auto auto', borderTop:'3px dotted #AB5D02'}}>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="fName1" className='w-25 mx-2'>First Name</label>
                <input type="text" id='fName1' placeholder='grid view...' className='w-50 '/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="lName1" className='w-25 mx-2'>Last Name</label>
                <input type="text" id='lName1' placeholder='grid view...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="email1" className='w-25 mx-2'>Email</label>
                <input type="text" id='email1' placeholder='grid view...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-center w-100 my-1">
                <label htmlFor="pw1" className='w-25 mx-2'>Password</label>
                <input type="password" id='pw1' placeholder='grid view...' className='w-50'/>
              </div>
            </div>
            
          </div>

          <div className='col-12 d-flex align-items-center justify-content-center py-2' style={{borderTop:'3px dotted #AB5D02'}}>
            <button type="button" className="btn text-white fs-7 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6" data-bs-toggle="modal" data-bs-target="#myModal" style={{background:'#AB5D02'}}>
              modal view
            </button>
          </div>

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-body">
                  <label htmlFor="fName1" className='w-25 mx-2 my-2'>First Name</label>
                  <input type="text" id='fName1' placeholder='modal...' className='w-50 '/>

                  <label htmlFor="lName1" className='w-25 mx-2 my-2'>Last Name</label>
                  <input type="text" id='lName1' placeholder='modal...' className='w-50'/>

                  <label htmlFor="email1" className='w-25 mx-2 my-2'>Email</label>
                  <input type="text" id='email1' placeholder='modal...' className='w-50'/>

                  <label htmlFor="pw1" className='w-25 mx-2 my-2'>Password</label>
                  <input type="password" id='pw1' placeholder='modal...' className='w-50'/>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn text-white" data-bs-dismiss="modal" style={{background:'#AB5D02'}}>submit</button>
                </div>

            </div>
          </div>
          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-10 col-sm-11 col-md-11 col-11 mx-2 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white py-3 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2" >
              <SlSizeFullscreen className='fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>size</p>
              <p className='p-0 m-0'>Form</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-searchbar--rounded-pill' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5">
            <div className='col-12 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6 rounded-0 d-flex flex-column align-items-center justify-content-start my-2'>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-3">
                <div className="col-12 my-1">
                  <label htmlFor="fName" className='w-25'>First Name</label>
                  <input type="text" id='fName' placeholder='sm...' className='w-25'/>
                </div>
                <div className="col-12">
                  <label htmlFor="lName" className='w-25'>Last Name</label>
                  <input type="text" id='lName' placeholder='md...' className='w-25'/>
                </div>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-3">
                <div className="col-12 my-1">
                  <label htmlFor="fName" className='w-25'>First Name</label>
                  <input type="text" id='fName' placeholder='sm...' className='w-50'/>
                </div>
                <div className="col-12">
                  <label htmlFor="lName" className='w-25'>Last Name</label>
                  <input type="text" id='lName' placeholder='md...' className='w-50'/>
                </div>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-3">
                <div className="col-12 my-1">
                  <label htmlFor="fName" className='w-25'>First Name</label>
                  <input type="text" id='fName' placeholder='sm...' className='w-75'/>
                </div>
                <div className="col-12">
                  <label htmlFor="lName" className='w-25'>Last Name</label>
                  <input type="text" id='lName' placeholder='md...' className='w-75'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-10 col-sm-11 col-md-11 col-11 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2">
              <IoIosColorFill className='fs-6 fs-sm-3 fs-md-2 fs-lg-3 fs-xl-5 fs-xxl-5'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>disabled</p>
              <p className='p-0 m-0'>Form</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-searchbar--rounded-pill' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5">
            <div className='col-12 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6 rounded-0 d-flex flex-column align-items-center justify-content-start my-2'>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-1">
                <label htmlFor="fName" className='w-25'>First Name</label>
                <input type="text" id='fName' placeholder='no...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-1">
                <label htmlFor="lName" className='w-25'>Last Name</label>
                <input type="text" id='lName' placeholder='yes...' className='w-50' disabled/>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-10 col-sm-11 col-md-11 col-11 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2 ">
              <RiShadowLine className='fs-6 fs-sm-3 fs-md-2 fs-lg-3 fs-xl-5 fs-xxl-5'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>inputBorder</p>
              <p className='p-0 m-0'>Form</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-searchbar--rounded-pill' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5">
            <div className='col-12 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6 rounded-0 d-flex flex-column align-items-center justify-content-start my-2'>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-1">
                <label htmlFor="fName" className='w-25'>First Name</label>
                <input type="text" id='fName' placeholder='yes...' className='w-50'/>
              </div>
              <div className="row mx-0 d-flex align-items-center justify-content-start w-100 my-1">
                <label htmlFor="lName" className='w-25'>Last Name</label>
                <input type="text" id='lName' placeholder='no...' className='w-50 border-0'/>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default page
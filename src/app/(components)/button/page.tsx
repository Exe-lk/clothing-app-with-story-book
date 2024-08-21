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

      <div className='row my-3' >
        <div className={`${styles.buttonWrapper} col-10 m-auto rounded-2`} style={{background:'#FFF'}}>
          <div className={`${styles.buttonCode} row mx-0`}>

            <code className='fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6'>
              <p className={`${styles.line1}`}>{`<Button \n`}</p>

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

              <p className={`${styles.property}`}> {`rounded= `} 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "default" || "top"|| "bottom"|| "rounded10"|| "rounded50"|| "pill"`}</span>{`\n`}   
              </p>

              <p className={`${styles.property}`}> {`size= `} 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "sm" || "md" || "lg"`}</span>{`\n`}  
              </p>

              <p className={`${styles.property}`}> {`shadow=` } 
                <span className={`${styles.punc}`}>{`{`}</span>  
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "none" || "small"|| "medium"|| "large""`}</span>{`\n`}
              </p>

              <p className={`${styles.property}`}> {`backgroundColor= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={`${styles.property}`}>
                <span className={`${styles.punc}`}>{`{`}</span> 
                  {`...props`}
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={styles.line7}>{`/Button> \n`}</p>
            </code>
          </div>
        </div>
      </div>

      <div className='row my-5 d-flex align-items-start justify-content-center' >
          
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-5 col-md-5 col-5 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-xxl-1 col-xl-2 col-lg-2 col-xl-2 col-2 m-0 p-0 text-center">
              <MdOutlineRoundedCorner className='fs-6 fs-sm-3 fs-md-2 fs-lg-3 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-8 col-xl-6 col-lg-6 col-6 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>rounded</p>
              <p className='p-0 m-0'>Button</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-button--rounded-10'  className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              {/* #FF69B4 */}
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
              {/* #FF00FF */}
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5">
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0' style={{background:'#AB5D02'}}>default</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-top ' style={{background:'#AB5D02'}}>top</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-bottom ' style={{background:'#AB5D02'}}>bottom</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-1 ' style={{background:'#AB5D02'}}>rounded10</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-5 ' style={{background:'#AB5D02'}}>rounded50</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-pill ' style={{background:'#AB5D02'}}>pill</button>
          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-5 col-md-5 col-5 mx-2 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-xxl-1 col-xl-2 col-lg-2 col-xl-2 col-2 m-0 p-0 text-center" >
              <SlSizeFullscreen className='fs-6 fs-sm-3 fs-md-2 fs-lg-3 fs-xl-5 fs-xxl-5'/>
            </div>
            <div className="col-xxl-8 col-xl-6 col-lg-6 col-6 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>size</p>
              <p className='p-0 m-0'>Button</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-button--size-small'  className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center h-100">
            <button className='btn btn-sm col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 text-center' style={{background:'#AB5D02'}}>sm</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 text-center' style={{background:'#AB5D02'}}>md</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 text-center' style={{background:'#AB5D02'}}>lg</button>
            <button className='btn btn-sm col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 text-center invisible' style={{background:'#AB5D02'}}>sm</button>
          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-5 col-md-5 col-5 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-xxl-1 col-xl-2 col-lg-2 col-xl-2 col-2 m-0 p-0 text-center">
              <IoIosColorFill className='fs-6 fs-sm-3 fs-md-2 fs-lg-3 fs-xl-5 fs-xxl-5'/>
            </div>
            <div className="col-xxl-8 col-xl-6 col-lg-6 col-6 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>bg-color</p>
              <p className='p-0 m-0'>Button</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/docs/stories-button--docs' className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center ">
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white bg-danger  ' >danger</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white bg-warning' >warning</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white bg-primary' >primary</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white bg-secondary' >secondary</button>
            <button className='btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white bg-black' >black</button>
          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-5 col-md-5 col-5 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-xxl-1 col-xl-2 col-lg-2 col-xl-2 col-2 m-0 p-0 text-center ">
              <RiShadowLine className='fs-6 fs-sm-3 fs-md-2 fs-lg-3 fs-xl-5 fs-xxl-5'/>
            </div>
            <div className="col-xxl-8 col-xl-6 col-lg-6 col-6 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>shadow</p>
              <p className='p-0 m-0'>Button</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-button--shadow-medium'  className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center ">
            <button className=' shadow-none btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white ' style={{background:'#AB5D02'}}>none</button>
            <button className=' shadow-sm btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white ' style={{background:'#AB5D02'}}>small</button>
            <button className=' shadow btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white ' style={{background:'#AB5D02'}}>medium</button>
            <button className=' shadow-lg btn col-3 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white' style={{background:'#AB5D02'}}>large</button>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default page
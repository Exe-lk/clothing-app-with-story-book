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
import { CiSearch } from "react-icons/ci";
import { useTheme } from '@/components/ThemeContext';
import NavBar from '@/components/Home/NavBar/NavBar';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container-fluid h-100'>

      <div className='row my-3 ms-4'>
        <h3 className='fw-bold fs-4 fs-smx-xxl-2 mx-xl-2 mx-lg-2 mx-1 my-xxl-2 my-1 p-1  fs-md-3 fs-lg-3 fs-xl-3 fs-xxl-3'> <i className="bi bi-file-earmark-code"></i> <span>General Usage</span> </h3>
      </div>

      <div className='row my-3' >
        <div className={`${styles.searchWrapper} col-10 m-auto rounded-2`} style={{background:'#FFF'}}>
          <div className={`${styles.searchCode} row mx-0`}>

            <code className='fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6'>
              <p className={`${styles.line1}`}>{`<SearchBar  \n`}</p>

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
                <span className={`${styles.comment}`}>{` // "default" || "rounded10"|| "rounded50"|| "pill"`}</span>{`\n`}   
              </p>

              <p className={`${styles.property}`}> {`color= `} 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "danger" || "primary" || "secondary" || "warning"`}</span>{`\n`}  
              </p>

              <p className={`${styles.property}`}> {`backgroundColor=` } 
                <span className={`${styles.punc}`}>{`{`}</span>  
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "danger" || "primary" || "secondary" || "warning""`}</span>{`\n`}
              </p>

              <p className={`${styles.property}`}> {`padding= ` } 
                <span className={`${styles.punc}`}>{`{`}</span> 
                  <span className={`${styles.value}`}>{`Integer`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span>
                <span className={`${styles.comment}`}>{` // 0 || 1 || 2 || 3`}</span>{`\n`} 
              </p>

              <p className={`${styles.property}`}>
                <span className={`${styles.punc}`}>{`{`}</span> 
                  {`...props`}
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={styles.line7}>{`/SearchBar> \n`}</p>
            </code>
          </div>
        </div>
      </div>

      <div className='row my-5 d-flex align-items-start justify-content-center' >
          
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-10 col-md-10 col-10 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0 ">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2">
              <MdOutlineRoundedCorner className='fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>rounded</p>
              <p className='p-0 m-0'>Search Bar</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-searchbar--rounded-pill' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 pb-4">

            <div className="col-5 col mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 d-flex align-items-center justify-content-between border border-black" >

                <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 " type="search" placeholder="default"/>
                <CiSearch className='btn border-none px-0 fs-2'/>
  
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0  d-flex align-items-center justify-content-between rounded-1 border border-black" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="rounded10"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0  d-flex align-items-center justify-content-between rounded-4 border border-black" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="rounded50"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 d-flex align-items-center justify-content-between rounded-pill border border-black" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="pill"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

          </div>
        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-10 col-md-10 col-10 mx-2 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2" >
              <i className="bi bi-palette fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1"></i>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>color</p>
              <p className='p-0 m-0'>Search Bar</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/docs/stories-searchbar--docs' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 pb-4">

            <div className="col-5 col mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black " >

                <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-danger" type="search" placeholder="danger"/>
                <CiSearch className='btn border-none px-0 fs-2'/>
  
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between rounded-1 border border-black " >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-primary" type="search" placeholder="primary"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between rounded-4 border border-black " >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-secondary" type="search" placeholder="secondary"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between rounded-pill border border-black " >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-warning" type="search" placeholder="warning"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

          </div>

        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-10 col-md-10 col-10 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0 ">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2">
              <IoIosColorFill className='fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>bg-color</p>
              <p className='p-0 m-0'>Search Bar</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/docs/stories-searchbar--docs' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 pb-4">

            <div className="col-5 col mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black bg-danger " >

                <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 bg-danger" type="search" placeholder="danger"/>
                <CiSearch className='btn border-none px-0 fs-2'/>
  
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between  border border-black bg-primary" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 bg-primary" type="search" placeholder="primary"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between  border border-black bg-secondary" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 bg-secondary" type="search" placeholder="secondary"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black bg-warning" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 bg-warning" type="search" placeholder="warning"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

          </div>

        </div>
        <div className={`${styles.container} col-xxl-5 col-xl-5 col-lg-5 col-sm-10 col-md-10 col-10 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3 `} >
          <div className="row mx-0">
            <div className="col-1 p-0 d-flex align-items-center justify-content-center mb-4 me-2">
              <i className="bi bi-distribute-vertical fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1"></i>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold m-0 p-0">
              <p className='p-0 m-0'>padding</p>
              <p className='p-0 m-0'>Search Bar</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-searchbar--padding-0' target="_blank" className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          
          <div className="row mx-0 d-flex align-items-center justify-content-center fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5">

            <div className="col-5 col mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black" >

                <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="0"/>
                <CiSearch className='btn border-none px-0 fs-2'/>
  
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-1 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="1"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-2 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="2"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

            <div className="col-5 mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-1 my-xxl-2 my-1 p-3 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5  text-white rounded-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 d-flex align-items-center justify-content-between border border-black" >
              <input className="border-0 w-75 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5" type="search" placeholder="3"/>
              <CiSearch className='btn border-none px-0 fs-2'/>
            </div>

          </div>

        </div>
       
      </div>
    </div>
  )
}

export default page
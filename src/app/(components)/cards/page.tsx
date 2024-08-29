'use client';

import styles from './page.module.scss';
import React, { useState } from 'react';
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

const Cards = () => {
  const [selectedValue,setSelectedValue] = useState("list");
  const handleRadioChange = (value:any) => {
    setSelectedValue(value);
  };
  return (
    <div className='container-fluid h-100' >

      <div className='row my-3 ms-4'>
        <h3 className='fw-bold fs-4 fs-smx-xxl-2 mx-xl-2 mx-lg-2 mx-1 my-xxl-2 my-1 p-1  fs-md-3 fs-lg-3 fs-xl-3 fs-xxl-3'> <i className="bi bi-file-earmark-code"></i> <span>General Usage</span> </h3>
      </div>

      <div className='row my-3' >
        <div className={`${styles.buttonWrapper} col-10 m-auto rounded-2`} style={{background:'#FFF'}}>
          <div className={`${styles.buttonCode} row mx-0`}>

            <code className='fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6'>
              <p className={`${styles.line1}`}>{`<Card \n`}</p>

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
                <span className={`${styles.comment}`}>{` // "default" || "rounded10"|| "rounded20"|| "rounded30`}</span>{`\n`}   
              </p>

              <p className={`${styles.property}`}> {`shadow=` } 
                <span className={`${styles.punc}`}>{`{`}</span>  
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "none" || "small"|| "medium"|| "large""`}</span>{`\n`}
              </p>

              <p className={`${styles.property}`}> {`view=` } 
                <span className={`${styles.punc}`}>{`{`}</span>  
                  <span className={`${styles.value}`}>{`String`}</span> 
                <span className={`${styles.punc}`}>{`}`}</span> 
                <span className={`${styles.comment}`}>{` // "list" || "grid"`}</span>{`\n`}
              </p>

              <p className={`${styles.property}`}>
                <span className={`${styles.punc}`}>{`{`}</span> 
                  {`...props`}
                <span className={`${styles.punc}`}>{`}`}</span> {`\n`} 
              </p>

              <p className={styles.line7}>{`/Card> \n`}</p>
            </code>
          </div>
        </div>
      </div>

      <div className='row my-5 d-flex align-items-start justify-content-center' >
          
        <div className={`${styles.container} col-10 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 me-2 p-0 d-flex align-items-center justify-content-center mb-4">
              <MdOutlineRoundedCorner className='fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold  p-0">
              <p className='p-0 m-0'>rounded</p>
              <p className='p-0 m-0'>Card</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-button--rounded-10' target="_blank"  className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              {/* #FF69B4 */}
              <p className='m-0 p-0 fs-7 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
              {/* #FF00FF */}
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center ">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-0">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >default</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold  fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-1">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-top-1 rounded-bottom-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >rounded10</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-2">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-top-2 rounded-bottom-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >rounded20</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-3">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-top-3 rounded-bottom-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >rounded30</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} col-10 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 me-2 p-0 d-flex align-items-center justify-content-center mb-4">
              <RiShadowLine className='fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold  p-0">
              <p className='p-0 m-0'>shadow</p>
              <p className='p-0 m-0'>Card</p>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-button--shadow-medium' target="_blank"  className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className="row mx-0 d-flex align-items-center justify-content-center ">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-0 shadow-none">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >none</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold  fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-0 shadow-sm">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >small</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-0 shadow">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >medium</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2">
              <div className="card rounded-0 shadow-lg">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >large</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} col-10 mx-2 my-xxl-5 my-xl-5 my-lg-5 my-md-4 my-sm-4 my-4 bg-white p-2 rounded-3`} >
          <div className="row mx-0">
            <div className="col-1 me-2 p-0 d-flex align-items-center justify-content-center mb-4">
              <RiShadowLine className='fs-2 fs-sm-1 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1'/>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-6 fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1 text-capitalize mb-4 fw-bold  p-0 d-flex align-items-center ">
              <div>
                <p className='p-0 m-0'>view</p>
                <p className='p-0 m-0'>Card</p>
              </div>
              <div className="form-check ms-xxl-5 ms-xl-5 ms-lg-5 ms-sm-4 ms-md-5 ms-3 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-sm-6 fs-7">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="list" checked={selectedValue ==="list"} onChange={() =>handleRadioChange("list")}/>
                <label className="form-check-label" htmlFor="list">List</label>
              </div>
              <div className="form-check fs-7 fs-sm-6 fs-xl-5 fs-lg-5 fs-md-5 ms-2 ms-xxl-3 ms-xl-3 ms-lg-3 ms-md-3 ms-sm-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="gird" checked={selectedValue ==="gird"} onChange={() =>handleRadioChange("gird")}/>
                <label className="form-check-label" htmlFor="gird">Gird</label>
              </div>
            </div>
            <Link href='https://66c5c74d841f3ca4bc8433d8-zbcojrxnsm.chromatic.com/?path=/story/stories-button--shadow-medium' target="_blank"  className={`${styles.strybook} col-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-capitalize mb-4 fw-bold d-flex align-items-center justify-content-center btn m-auto`} style={{background:'rgb(243, 207, 198)'}}>
              <p className='m-0 p-0 fs-8 fs-sm-7 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5' style={{color:'rgb(248, 152, 128)'}}>storybook</p>
            </Link>
          </div>
          <div className={selectedValue==='list'?'row mx-0 d-flex align-items-center justify-content-center':'row mx-0 d-grid'} style={{gridTemplateColumns:'auto auto'}}>
            <div className={selectedValue==='list'?'col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2':'col-6 my-2 w-100'}>
              <div className="card rounded-0">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >{selectedValue}</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold  fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className={selectedValue==='list'?'col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2':'col-6 my-2 w-100'}>
              <div className="card rounded-0">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >{selectedValue}</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className={selectedValue==='list'?'col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2':'col-6 my-2 w-100'}>
              <div className="card rounded-0">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >{selectedValue}</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
            <div className={selectedValue==='list'?'col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 my-2':'col-6 my-2 w-100'}>
              <div className="card rounded-0">
                <svg className="bd-placeholder-img card-img-top d-flex align-items-center justify-content-center rounded-0" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="rgba(171, 93, 2, 0.66)"></rect>
                  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="#000" >{selectedValue}</text>
                </svg>
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-6 fs-sm-4 fs-md-3 fs-lg-3 fs-xl-1 fs-xxl-1">Card title</h5>
                  <p className="card-text fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eveniet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  )
}

export default Cards
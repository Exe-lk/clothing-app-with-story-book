'use client';
import React, { useState } from 'react'
import styles from './page.module.scss';
import Link from 'next/link';
import { GrDirections } from "react-icons/gr";
import { RiFlagFill } from "react-icons/ri";
import { TbBrandYarn } from 'react-icons/tb';
import { CgNpm } from 'react-icons/cg';
import { RiExpandLeftRightLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Development = () => {
  const [selectedValue,setSelectedValue] = useState("react");
  const handleRadioChange = (value:any) => {
    setSelectedValue(value);
  };
  
  return (
    <div className='cotainer-fluid mx-0'>

      <div className={`${styles.breadCrumb} row mx-0 w-100`} style={{zIndex:1000}}>
        <nav aria-label="breadcrumb" className='my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <Link href='installation' className="breadcrumb-item text-decoration-none" style={{color: 'rgba(0, 0, 0, 0.35)'}}>Getting Started</Link>
            <li className="breadcrumb-item active" aria-current="page">{`Development`}</li>
          </ol>
        </nav>
      </div>

      <div className={`${styles.start} row d-flex mx-0`}>
        <div className={`${styles.left} col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0`}>
          <div className="row mx-0 bg-white ">
            <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold text-start'><GrDirections className="rounded-circle me-3" style={{color:'rgb(70, 188, 170,1)'}}/>Choose your preference</p>
            <p className='fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>
              3 different options are offered according to the needs of your project.
            </p>
            <p className='fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>Choose</p>
          </div>
          <div className="row mx-0 bg-white p-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="react" checked={selectedValue ==="react"} onChange={() =>handleRadioChange("react")}/>
              <label className="form-check-label" htmlFor="react">Create React App</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="vite" checked={selectedValue ==="vite"} onChange={() =>handleRadioChange("vite")}/>
              <label className="form-check-label" htmlFor="vite">Vite</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="nextJs" checked={selectedValue ==="nextJs"} onChange={() =>handleRadioChange("nextJs")}/>
              <label className="form-check-label" htmlFor="nextJs">NextJs</label>
            </div>
          </div>
        </div>
        <div className={`${styles.right} col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-12`} >
          
          <div className="row mx-0 bg-white">
            <div className="col-12 d-flex align-items-center">
              <RiFlagFill className='me-3 fs-3 fw-bold' color='rgba(77,105,250,1)'/>
              <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>Development Server <span className='d-block fw-normal'>step 2</span></p>
            </div>
              <p className='fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>You can use npm or yarn to download the required dependencies.</p>
          </div>
          <div className="row mx-0 bg-white">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex flex-column">
              <div className="row-mx-0">
                <CgNpm className='fs-1 my-4' style={{color:'red'}}/> <span className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold d-inline-block '>npm</span>
              </div>
              <div className="row-mx-0 d-flex">
                <p className={`${selectedValue=='react'?'d-block':'d-none'} p-2 w-75 me-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa'}}>npm start</p>
                <p className={`${selectedValue=='vite'||selectedValue=='nextJs'?'d-block':'d-none'} p-2 w-75 me-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa'}}>npm run dev</p>

                <p className={`${styles.copy} p-2 fw-bold d-flex align-items-center btn fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa',color:'rgba(77,105,250,1)'}}><i className="bi bi-copy me-2 fw-bold"></i>Copy</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex flex-column">
              <div className="row-mx-0">
                <TbBrandYarn className='fs-1 text-white rounded-1 my-4 me-2' style={{background:'rgb(17, 124, 173)'}}/> <span className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold d-inline-block '>yarn</span>
              </div>
              <div className="row-mx-0 d-flex">
                <p className={`${selectedValue=='react'?'d-block':'d-none'} p-2 w-75 me-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa'}}>yarn start</p>
                <p className={`${selectedValue=='vite'||selectedValue=='nextJs'?'d-block':'d-none'} p-2 w-75 me-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa'}}>yarn dev</p>

                <p className={`${styles.copy} p-2 fw-bold d-flex align-items-center btn fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa',color:'rgba(77,105,250,1)'}}><i className="bi bi-copy me-2 fw-bold"></i>Copy</p>
              </div>
            </div>
          </div>

          <div className="row mx-0 bg-white my-3">

            <div className="col-12 d-flex align-items-center">
              <RiExpandLeftRightLine className='me-3 fs-3 fw-bold' color='rgb(70, 188, 170,1)'/>
              <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>Other Create React App Scripts</p>
            </div>

            <div className="col-12 d-flex align-items-center">
              <p className='alert w-100 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'style={{background:'#dbe1fe'}} ><IoMdInformationCircleOutline className='fs-4 me-2 '/>You can run the following codes as <code>npm run SCRIPTS_KEY</code>  or <code>yarn SCRIPTS_KEY</code>.</p>
            </div>

            <div className="col-12 d-flex align-items-center bg-white my-3" >
              {/* for react view */}
              <code style={{background:'#eff4fa'}} className={`${selectedValue==='react'?'d-block':'d-none'} p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`}>
                <span>"scripts"{`: {`}</span> <br />
                &emsp;&emsp;&emsp; <span>"start":</span>  <span style={{color:'#46bcaa'}}>"react-scripts start"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"build":</span>  <span style={{color:'#46bcaa'}}>"react-scripts build"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"serve":</span>  <span style={{color:'#46bcaa'}}>"serve -s build"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"test":</span>  <span style={{color:'#46bcaa'}}>"react-scripts test"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"eject":</span>  <span style={{color:'#46bcaa'}}>"react-scripts eject"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint":</span>  <span style={{color:'#46bcaa'}}>"eslint ."</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:fix":</span>  <span style={{color:'#46bcaa'}}>"eslint --fix --ext .js --ext .ts --ext .jsx --ext .tsx ./src"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:check-scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint-config-prettier-scss-check"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint **/*.scss"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:fix-scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint --fix **/*.scss"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"icon":</span>  <span style={{color:'#46bcaa'}}>"svgr SvgIcons -d src/components/icon/svg-icons --typescript"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"storybook":</span>  <span style={{color:'#46bcaa'}}>"start-storybook -p 6006"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"storybook-withoutCache":</span>  <span style={{color:'#46bcaa'}}>"start-storybook -p 6006 --no-manager-cache"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"build-storybook":</span>  <span style={{color:'#46bcaa'}}>"build-storybook"</span><br />
                <span className='text-black'>{`},`}</span>
              </code>
              {/* for vite view */}
              <code style={{background:'#eff4fa'}} className={`${selectedValue==='vite'?'d-block':'d-none'} p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`}>
                <span>"scripts"{`: {`}</span> <br />
                &emsp;&emsp;&emsp; <span>"dev":</span>  <span style={{color:'#46bcaa'}}>"vite"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"build":</span>  <span style={{color:'#46bcaa'}}>"vite build"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"preview":</span>  <span style={{color:'#46bcaa'}}>"vite preview"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint":</span>  <span style={{color:'#46bcaa'}}>"eslint ."</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:fix":</span>  <span style={{color:'#46bcaa'}}>"eslint --fix --ext .js --ext .ts --ext .jsx --ext .tsx ./src"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:check-scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint-config-prettier-scss-check"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint **/*.scss"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:fix-scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint --fix **/*.scss"</span><span className='text-black'>,</span><br />
                <span className='text-black'>{`},`}</span>
              </code>
              {/* for next view */}
              <code style={{background:'#eff4fa'}} className={`${selectedValue==='nextJs'?'d-block':'d-none'} p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`}>
                <span>"scripts"{`: {`}</span> <br />
                &emsp;&emsp;&emsp; <span>"dev":</span>  <span style={{color:'#46bcaa'}}>"next dev"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"build":</span>  <span style={{color:'#46bcaa'}}>"next build"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"start":</span>  <span style={{color:'#46bcaa'}}>"next start"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint":</span>  <span style={{color:'#46bcaa'}}>"next lint ."</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:check-scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint-config-prettier-scss-check"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint **/*.scss"</span><span className='text-black'>,</span><br />
                &emsp;&emsp;&emsp; <span>"lint:fix-scss":</span>  <span style={{color:'#46bcaa'}}>"stylelint --fix **/*.scss"</span><span className='text-black'>,</span><br />
                <span className='text-black'>{`},`}</span>
              </code>
            </div>
            <div className="col-12 d-flex align-items-center">
              <p className='alert w-100 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'style={{background:'#daf2ee'}} ><BsFillPatchCheckFill className='me-2 fs-6 fs-sm-6 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4'/>Example: <code>npm run storybook</code>  or <code>yarn storybook</code>.</p>
            </div>
          </div>    
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-between mx-0 bg-white p-3 mb-5">
        <p className='w-50 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'><i className="bi bi-check rounded-circle me-2 text-white border-white " style={{background:'#323232bf'}}></i>If you are ready, you can proceed to the next step.</p>
        <Link href='folder-structure' className={`${styles.next} p-2 me-2 w-auto fw-bold text-decoration-none fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 btn`} style={{background:'#eff4fa',color:'#46bcaa'}}><i className="bi bi-chevron-compact-right"></i>Next</Link>
      </div>
      <div className="row mt-3 d-flex align-items-center justify-content-between mx-0 bg-white px-3 w-100 p-0 position-fixed bottom-0">
        <p className='fs-7'>Copyright © 2023 - Version 4.3.4</p>
      </div>

    </div>
  )
}

export default Development;
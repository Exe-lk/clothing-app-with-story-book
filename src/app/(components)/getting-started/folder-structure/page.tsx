'use client';
import React, { useState } from 'react'
import styles from './page.module.scss';
import Link from 'next/link';
import { GrDirections } from "react-icons/gr";
import { PiTreeStructure } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";

const FolderStructure = () => {
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
            <li className="breadcrumb-item active" aria-current="page">{`Folder Structure`}</li>
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

          <div className="row mx-0 bg-white mb-3">

            <div className="col-12 d-flex align-items-center">
              <PiTreeStructure className='me-3 fs-3 fw-bold' color='rgb(70, 188, 170,1)'/>
              <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>Vite Folder Structure</p>
            </div>

            <div className="col-12 d-flex align-items-center">
              <p className='alert w-100 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'style={{background:'#dbe1fe'}} ><IoMdInformationCircleOutline className='fs-4 me-2 '/>You can run the following codes as <code>npm run SCRIPTS_KEY</code>  or <code>yarn SCRIPTS_KEY</code>.</p>
            </div>

            <div className="col-12 d-flex align-items-center bg-white my-3" >
              {/* for react view */}
              <code style={{background:'#eff4fa', color:'#646865'}} className={`${selectedValue==='react'?'d-block':'d-none'} p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 w-100`}>
              facit <br />
                &emsp;&emsp;  ├── .storybook<br />
                &emsp;&emsp;  ├── node_modules<br />
                &emsp;&emsp;  ├── public<br />
                &emsp;&emsp;  ├── src<br />
                &emsp;&emsp;&emsp;  │   ├── App<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── App.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── assets<br />
                &emsp;&emsp;&emsp;  │   ├── common<br />
                &emsp;&emsp;&emsp;  │   ├── components<br />
                &emsp;&emsp;&emsp;  │   ├── contexts<br />
                &emsp;&emsp;&emsp;  │   ├── helpers<br />
                &emsp;&emsp;&emsp;  │   ├── hooks<br />
                &emsp;&emsp;&emsp;  │   ├── layout<br />
                &emsp;&emsp;&emsp;  │   ├── pages<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── _layout<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;  │   │       ├── _asides<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;  │   │       ├── _footers<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;  │   │       └── _headers<br />
                &emsp;&emsp;&emsp;  │   ├── routes<br />
                &emsp;&emsp;&emsp;  │   ├── stories<br />
                &emsp;&emsp;&emsp;  │   ├── styles<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── components<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── custom<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── elements<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── generic<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── objects<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── settings<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── tools<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── utilities<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── vendors<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── style.scss<br />
                &emsp;&emsp;&emsp;  │   ├── type<br />
                &emsp;&emsp;&emsp;  │   ├── declaration.d.ts<br />
                &emsp;&emsp;&emsp;  │   ├── i18n.ts<br />
                &emsp;&emsp;&emsp;  │   ├── index.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── lang.ts<br />
                &emsp;&emsp;&emsp;  │   ├── menu.ts<br />
                &emsp;&emsp;&emsp;  │   ├── react-app-env.d.ts<br />
                &emsp;&emsp;&emsp;  │   ├── reportWebVitals.ts<br />
                &emsp;&emsp;&emsp;  │   ├── setupTests.ts<br />
                &emsp;&emsp;&emsp;  │   └── steps.tsx<br />
                &emsp;&emsp;  ├── SvgIcons<br />
                &emsp;&emsp;&emsp;  │   └── custom-icon.svg<br />
                &emsp;&emsp;  ├── .env<br />
                &emsp;&emsp;  ├── .env.development<br />
                &emsp;&emsp;  ├── .env.production<br />
                &emsp;&emsp;  ├── .eslintignore<br />
                &emsp;&emsp;  ├── .eslintrc<br />
                &emsp;&emsp;  ├── .gitattributes<br />
                &emsp;&emsp;  ├── .gitignore<br />
                &emsp;&emsp;  ├── .prettierrc<br />
                &emsp;&emsp;  ├── .stylelintignore<br />
                &emsp;&emsp;  ├── .stylelintrc<br />
                &emsp;&emsp;  ├── .svgrrc<br />
                &emsp;&emsp;  ├── package.json<br />
                &emsp;&emsp;  ├── README.md<br />
                &emsp;&emsp;  └── tsconfig.json<br />
              </code>
              {/* for vite view */}
              <code style={{background:'#eff4fa', color:'#646865'}} className={`${selectedValue==='vite'?'d-block':'d-none'} p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 w-100`}>
              facit <br />
                &emsp;&emsp;  ├── node_modules<br />
                &emsp;&emsp;  ├── public<br />
                &emsp;&emsp;  ├── src<br />
                &emsp;&emsp;&emsp;  │   ├── App<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── App.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── assets<br />
                &emsp;&emsp;&emsp;  │   ├── common<br />
                &emsp;&emsp;&emsp;  │   ├── components<br />
                &emsp;&emsp;&emsp;  │   ├── contexts<br />
                &emsp;&emsp;&emsp;  │   ├── helpers<br />
                &emsp;&emsp;&emsp;  │   ├── hooks<br />
                &emsp;&emsp;&emsp;  │   ├── layout<br />
                &emsp;&emsp;&emsp;  │   ├── pages<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── _layout<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;  │   │       ├── _asides<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;  │   │       ├── _footers<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;  │   │       └── _headers<br />
                &emsp;&emsp;&emsp;  │   ├── routes<br />
                &emsp;&emsp;&emsp;  │   ├── stories<br />
                &emsp;&emsp;&emsp;  │   ├── styles<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── components<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── custom<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── elements<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── generic<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── objects<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── settings<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── tools<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── utilities<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   ├── vendors<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── style.scss<br />
                &emsp;&emsp;&emsp;  │   ├── type<br />
                &emsp;&emsp;&emsp;  │   ├── declaration.d.ts<br />
                &emsp;&emsp;&emsp;  │   ├── i18n.ts<br />
                &emsp;&emsp;&emsp;  │   ├── index.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── lang.ts<br />
                &emsp;&emsp;&emsp;  │   ├── menu.ts<br />
                &emsp;&emsp;&emsp;  │   ├── react-app-env.d.ts<br />
                &emsp;&emsp;&emsp;  │   ├── reportWebVitals.ts<br />
                &emsp;&emsp;&emsp;  │   ├── setupTests.ts<br />
                &emsp;&emsp;&emsp;  │   └── steps.tsx<br />
                &emsp;&emsp;  ├── SvgIcons<br />
                &emsp;&emsp;&emsp;  │   └── custom-icon.svg<br />
                &emsp;&emsp;  ├── .env<br />
                &emsp;&emsp;  ├── .env.development<br />
                &emsp;&emsp;  ├── .env.production<br />
                &emsp;&emsp;  ├── .eslintignore<br />
                &emsp;&emsp;  ├── .eslintrc<br />
                &emsp;&emsp;  ├── .gitattributes<br />
                &emsp;&emsp;  ├── .gitignore<br />
                &emsp;&emsp;  ├── .prettierrc<br />
                &emsp;&emsp;  ├── .stylelintignore<br />
                &emsp;&emsp;  ├── .stylelintrc<br />
                &emsp;&emsp;  ├── .svgrrc<br />
                &emsp;&emsp;  ├── index.html<br />
                &emsp;&emsp;  ├── package.json<br />
                &emsp;&emsp;  ├── README.md<br />
                &emsp;&emsp;  └── tsconfig.json<br />
                &emsp;&emsp;  └── tsconfig.node.json<br />
                &emsp;&emsp;  └── vite.config.ts<br />
              </code>
              {/* for next view */}
              <code style={{background:'#eff4fa', color:'#646865'}} className={`${selectedValue==='nextJs'?'d-block':'d-none'} p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 w-100`}>
              facit <br />
                &emsp;&emsp;  ├── .next<br />
                &emsp;&emsp;  ├── assets<br />
                &emsp;&emsp;  ├── common<br />
                &emsp;&emsp;  ├── components<br />
                &emsp;&emsp;  ├── contexts<br />
                &emsp;&emsp;  ├── helpers<br />
                &emsp;&emsp;  ├── hooks<br />
                &emsp;&emsp;  ├── layout<br />
                &emsp;&emsp;  ├── node_modules<br />
                &emsp;&emsp;  ├── pages<br />
                &emsp;&emsp;&emsp;  │   ├── _layout<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── _asides<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── _footers<br />
                &emsp;&emsp;&emsp;&emsp;  │   │   └── _headers<br />
                &emsp;&emsp;&emsp;  │   ├── 404.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── _app.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── _document.tsx<br />
                &emsp;&emsp;&emsp;  │   ├── index.tsx<br />
                &emsp;&emsp;  ├── public<br />
                &emsp;&emsp;  ├── routes<br />
                &emsp;&emsp;  ├── styles<br />
                &emsp;&emsp;&emsp;  │   └── components<br />
                &emsp;&emsp;&emsp;  │   └── custom<br />
                &emsp;&emsp;&emsp;  │   └── elements<br />
                &emsp;&emsp;&emsp;  │   └── generic<br />
                &emsp;&emsp;&emsp;  │   └── objects<br />
                &emsp;&emsp;&emsp;  │   └── settings<br />
                &emsp;&emsp;&emsp;  │   └── tools<br />
                &emsp;&emsp;&emsp;  │   └── utilities<br />
                &emsp;&emsp;&emsp;  │   └── vendors<br />
                &emsp;&emsp;&emsp;  │   └── style.scss<br />
                &emsp;&emsp;  ├── type<br />
                &emsp;&emsp;  ├── .env<br />
                &emsp;&emsp;  ├── .env.development<br />
                &emsp;&emsp;  ├── .env.production<br />
                &emsp;&emsp;  ├── .eslintignore<br />
                &emsp;&emsp;  ├── .eslintrc<br />
                &emsp;&emsp;  ├── .gitattributes<br />
                &emsp;&emsp;  ├── .gitignore<br />
                &emsp;&emsp;  ├── .prettierrc<br />
                &emsp;&emsp;  ├── .stylelintignore<br />
                &emsp;&emsp;  ├── .stylelintrc<br />
                &emsp;&emsp;  ├── index.d.ts<br />
                &emsp;&emsp;  ├── lang.ts<br />
                &emsp;&emsp;  ├── menu.ts<br />
                &emsp;&emsp;  ├── next.config.ts<br />
                &emsp;&emsp;  ├── next-i18next.config.ts<br />
                &emsp;&emsp;  ├── package.json<br />
                &emsp;&emsp;  ├── README.md<br />
                &emsp;&emsp;  └── steps.tsx<br />
                &emsp;&emsp;  └── tsconfig.json<br />
              </code>
            </div>
          </div>    
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-between mx-0 bg-white p-3 mb-5">
        <p className='w-50 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'><i className="bi bi-check rounded-circle me-2 text-white border-white " style={{background:'#323232bf'}}></i>If you are ready, you can proceed to the next step.</p>
        <Link href='bootstrap-variables' className={`${styles.next} p-2 me-2 w-auto fw-bold text-decoration-none fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 btn`} style={{background:'#eff4fa',color:'#46bcaa'}}><i className="bi bi-chevron-compact-right"></i>Next</Link>
      </div>
      <div className="row mt-3 d-flex align-items-center justify-content-between mx-0 bg-white px-3 w-100 p-0 position-fixed bottom-0">
        <p className='fs-7'>Copyright © 2023 - Version 4.3.4</p>
      </div>

    </div>
  )
}

export default FolderStructure;
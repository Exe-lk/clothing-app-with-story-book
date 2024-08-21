'use client';
import React, { useState } from 'react'
import styles from './page.module.scss';
import Link from 'next/link';
import { GrDirections } from "react-icons/gr";
import { PiTreeStructure } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { PiCircleDashedBold } from "react-icons/pi";
import { FaRegFile } from "react-icons/fa6";

const ProjectStructure = () => {
  const [selectedValue,setSelectedValue] = useState("react");
  const handleRadioChange = (value:any) => {
    setSelectedValue(value);
  };
  
  return (
    <div className='cotainer-fluid mx-0'>

      <div className={`${styles.breadCrumb} row mx-0 w-100 `} style={{zIndex:1000}}>
        <nav aria-label="breadcrumb" className='my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <Link href='installation' className="breadcrumb-item text-decoration-none" style={{color: 'rgba(0, 0, 0, 0.35)'}}>Getting Started</Link>
            <li className="breadcrumb-item active" aria-current="page">{`Project Structure`}</li>
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

            <div className='col-12 d-flex align-items-center'>
              <FaRegFile className='me-3 fs-3 fw-bold' color='rgb(70, 188, 170,1)'/>
              <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>index.tsx <span className='d-block fw-normal text-secondary fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>src/index.tsx</span></p>
            </div>

            <div className="col-12 d-flex align-items-center bg-white my-3" >
              {/* for react view */}
              <code style={{background:'#eff4fa', color:'#646865'}} className={`${selectedValue==='react'||selectedValue==='vite'?'d-block':'d-none'} p-3 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 w-100`}>
                {/* imports */}
                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>React</span> <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'react'</span> ;<br />

                <span className={`${styles.comment}`}>{`//`} import ReactDOM from 'react-dom'; {`//`} For React 17</span> ;<br />

                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>{`{ createRoot }`} </span> <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'react-dom/client'</span><span className={`${styles.comment}`}>{`//`} For React 18</span> ;<br />

                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>{`{ BrowserRouter `}</span> <span className={`${styles.keyWord}`}>as</span> <span className='text-black'>{`Router } `}</span> <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'react-router-dom'</span> ;<br />

                <span className={`${styles.keyWord}`}>import</span> <span className={`${styles.string}`}>'./styles/styles.scss'</span> ;<br />
                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>App </span> <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'./App/App'</span> ;<br />

                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>reportWebVitals </span> <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'./reportWebVitals'</span> ;<br />

                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>{`{ ThemeContextProvider }`}</span> <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'./contexts/themeContext'</span> ;<br />
                
                <span className={`${styles.keyWord}`}>import</span> <span className='text-black'>{`{ AuthContextProvider }`}</span>  <span className={`${styles.keyWord}`}>from</span> <span className={`${styles.string}`}>'./contexts/authContext'</span> ;<br />
                
                <span className={`${styles.keyWord}`}>import</span><span className={`${styles.string}`}>'./i18n'</span> ;<br /><br />

                {/* code */}
                <span className={`${styles.keyWord}`}>const </span> <span className='text-black'>children </span><span className={`${styles.className}`}>= </span><span className='text-black'>{`(`} </span> <br />

                &emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>AuthContextProvider </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>ThemeContextProvider </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>Router </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>React.StrictMode </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<span className='text-black ms-1'>{`  <`} </span><span className={`${styles.className}`}>App </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>React.StrictMode </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>Router </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>ThemeContextProvider </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>AuthContextProvider </span><span className='text-black'>{`>`} </span><br />

                <span className='text-black'>{`);`} </span> <br /><br />

                {/* logics */}
                <span className={`${styles.keyWord}`}>const </span> <span className='text-black'>container  </span><span className={`${styles.className}`}>= </span><span className='text-black'>document.</span><span className={`${styles.className}`}>getElementById </span><span className='text-black'>{`(`}</span><span className={`${styles.string}`}>'root'</span><span className='text-black'>{`);`} </span> <br /><br />

                <span className={`${styles.comment}`}>
                  {`//`} ReactDOM.render(children, container); {`//`} For React 17
                  </span> ;<br />

                <span className={`${styles.className}`}>createRoot </span><span className='text-black'>{`(`}</span><span className='text-black'>container</span><span className={`${styles.keyWord}`}> as </span><span className='text-black'>Element</span><span className='text-black'>{`).`}</span><span className={`${styles.className}`}>render</span><span className='text-black'>{`(`}</span><span className='text-black'>children</span><span className='text-black'>{`);`}</span><span className={`${styles.comment}`}> {`//`} For React 18</span> ;<br /><br />

                <span className={`${styles.comment}`}>{`//`} If you want to start measuring performance in your app, pass a function</span> ;<br />
                <span className={`${styles.comment}`}>{`//`} to log results (for example: reportWebVitals(console.log))</span> ;<br />
                <span className={`${styles.comment}`}>{`//`} or send to an analytics endpoint. Learn more: https:{`//`}bit.ly/CRA-vitals</span> ;<br />
                <span className={`${styles.className}`}>reportWebVitals</span><span className='text-black'>{`(`}</span><span className='text-black'>{`);`}</span>
              </code>
            </div>
            <div className="col-12 d-flex align-items-center">
              <p className='alert w-100 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'style={{background:'#dbe1fe'}} ><IoMdInformationCircleOutline className='fs-4 me-2 '/>If you want to use React 17, you can uncomment the lines for 17 and then comment the lines for 18.</p>
            </div>
          </div>  

          <div className="row mx-0 bg-white my-3">

            <div className='col-12 d-flex align-items-center'>
              <FaRegFile className='me-3 fs-3 fw-bold' color='rgb(70, 188, 170,1)'/>
              <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>App.tsx<span className='d-block fw-normal text-secondary fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>src/App/App.tsx</span></p>
            </div>

            <div className="col-12 d-flex align-items-center bg-white my-3" >
              {/* for react view */}
              <code style={{background:'#eff4fa', color:'#646865'}} className={`${selectedValue==='react'||selectedValue==='vite'?'d-block':'d-none'} p-3 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 w-100`}>
                {/* imports */}

                <span className={`${styles.comment}`}>{`//`}  <br />
                 HERE ARE THE IMPORTS FOR THE APP  <br />
                {`//`}</span> ;<br />

                {/* code */}
                <span className={`${styles.keyWord}`}>const </span> <span className='text-black'>App </span><span className={`${styles.className}`}>= </span><span className='text-black'>{`()`} </span><span className={`${styles.className}`}>{`=>`} </span><span className='text-black'>{`{`} </span> <br />

                <span className={`${styles.comment}`}>{`//`}  <br />
                HERE ARE THE FUNCTIONS FOR THE APP <br />
                {`//`}</span> ;<br />

                <span className={`${styles.keyWord}`}>return  </span><span className='text-black'>{`(`} </span><br />

                &emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>ThemeProvider </span> <span className='text-black'>{`{`} </span><span className={`${styles.spread}`}>...themeProviderProps </span><span className='text-black'>{`}`} </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>ToastProvider </span> <span className='text-black'>{`{`} </span><span className={`${styles.spread}`}>...toastProviderProps </span><span className='text-black'>{`}`} </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>TourProvider  </span> <span className='text-black'>{`{`} </span><span className={`${styles.spread}`}>...tourProviderProps </span><span className='text-black'>{`}`} </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.spread}`}>div </span><span className={`${styles.string}`}>className= </span><span className={`${styles.keyWord}`}>'app' </span><span className='text-black'>{`{`} </span><span className={`${styles.spread}`}>...appProps </span><span className='text-black'>{`}`} </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black ms-3'>{`<`} </span><span className={`${styles.className}`}>AsideRoutes  </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black ms-3'>{`<`} </span><span className={`${styles.className}`}>Wrapper </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.spread}`}>div </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>Portal </span><span className={`${styles.string}`}>id= </span><span className={`${styles.keyWord}`}>'portal-notification' </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black ms-3'>{`</`} </span><span className={`${styles.className}`}>ReactNotifications  </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>Portal </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>TourProvider  </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>ToastProvider </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`</`} </span><span className={`${styles.className}`}>ThemeProvider </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;<span className='text-black'>{`);`} </span> <br />

                <span className='text-black'>{`);`} </span> <br /><br />

                <span className={`${styles.keyWord}`}>export  </span><span className={`${styles.keyWord}`}>default  </span><span className='text-black'>App; </span><br />
              </code>
            </div>
          </div>    

          <div className="row mx-0 bg-white my-3">

            <div className='col-12 d-flex align-items-center'>
              <FaRegFile className='me-3 fs-3 fw-bold' color='rgb(70, 188, 170,1)'/>
              <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>Wrapper.tsx<span className='d-block fw-normal text-secondary fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>src/layout/Wrapper/Wrapper.tsx</span></p>
            </div>

            <div className="col-12 d-flex align-items-center bg-white my-3" >
              {/* for react view */}
              <code style={{background:'#eff4fa', color:'#646865'}} className={`${selectedValue==='react'||selectedValue==='vite'?'d-block':'d-none'} p-3 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 w-100`}>
                {/* imports */}

                <span className={`${styles.comment}`}>[`//`]  <br />
                HERE ARE THE IMPORTS FOR THE WRAPPER  <br />
                {`//`}</span> ;<br />

                {/* code */}
                <span className={`${styles.keyWord}`}>const </span> <span className='text-black'>Wrapper  </span><span className={`${styles.className}`}>= </span><span className='text-black'>{`()`} </span><span className={`${styles.className}`}>{`=>`} </span><span className='text-black'>{`{`} </span> <br />

                <span className={`${styles.keyWord}`}>return  </span><span className='text-black'>{`(`} </span><br />

                &emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`}</span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>WrapperContainer </span><span className='text-black'>{`>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>HeaderRoutes </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>Content </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>FooterRoutes </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>WrapperContainer </span><span className='text-black'>{`/>`} </span><br />
                
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`} </span><span className={`${styles.className}`}>WrapperOverlay </span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;&emsp;&emsp;<span className='text-black'>{`<`}</span><span className='text-black'>{`/>`} </span><br />

                &emsp;&emsp;<span className='text-black'>{`);`} </span> <br />

                <span className='text-black'>{`);`} </span> <br /><br />

                <span className={`${styles.keyWord}`}>export  </span><span className={`${styles.keyWord}`}>default  </span><span className='text-black'>Wrapper; </span><br />
              </code>
            </div>
          </div>    
        </div>
      </div>
      {/* <div className="row d-flex align-items-center justify-content-between mx-0 bg-white p-3 mb-5">
        <p className='w-50 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'><i className="bi bi-check rounded-circle me-2 text-white border-white " style={{background:'#323232bf'}}></i>If you are ready, you can proceed to the next step.</p>
        <Link href='project-structure' className={`${styles.next} p-2 me-2 w-auto fw-bold text-decoration-none fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 btn`} style={{background:'#eff4fa',color:'#46bcaa'}}><i className="bi bi-chevron-compact-right"></i>Next</Link>
      </div> */}
      <div className="row mt-3 d-flex align-items-center justify-content-between mx-0 bg-white px-3 w-100 p-0 position-fixed bottom-0">
        <p className='fs-7'>Copyright © 2023 - Version 4.3.4</p>
      </div>

    </div>
  )
}

export default ProjectStructure;
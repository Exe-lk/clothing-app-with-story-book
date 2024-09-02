import styles from './Footer.module.scss';
import React from 'react';

const Footer = () => {
  return (
    <>
      {/* footer for xxl|xl|lg views */}
      <div className='col-12 d-xxl-flex d-xl-flex d-lg-flex d-none flex-column align-items-center justify-content-evenly' style={{background:'rgba(171, 93, 2, 0.06)'}}>
        <div className="row ing m-1 p-1 w-100 h-100 d-flex align-items-center justify-content-around">
          {/* Socialize menu */}
          <div className='col-4 p-1 d-flex flex-column align-items-center justify-content-evenly text-uppercase text-center' style={{borderRight:'1px solid #BFBFBF'}}>
            <div className='row  m-1 py-2 w-50' >
              <p className='py-2 text-uppercase fw-bold fs-xxl-4 fs-xl-5 fs-lg-5'>socialize</p>
              <div className='d-flex align-items-center justify-content-evenly pb-2'>
                <i className="bi bi-facebook w-auto p-0 m-sm-2 m-2 m-md-3 fs-4"></i>
                <i className="bi bi-instagram w-auto p-0 m-2 fs-4"></i>
                <i className="bi bi-tiktok w-auto p-0 m-sm-2 m-2 m-md-3 fs-4"></i>
              </div>
            </div>
            <div className='row  m-1 py-2 w-75' style={{borderBottom:'1px solid #BFBFBF', borderTop:'1px solid #BFBFBF'}}>
              <p className='py-2 text-uppercase fw-bold fs-xxl-4 fs-xl-5 fs-lg-5'>SEND AN EMAIL OR CALL</p>
              <div className='d-flex align-items-center justify-content-evenly pb-2'>
                <i className="bi bi-envelope-open-fill w-auto p-0 mx-4 my-2 fs-4"></i>
                <i className="bi bi-telephone-fill w-auto p-0 mx-4 my-2 fs-4"></i>
              </div>
            </div>
            <div className='row  m-1 py-2 d-flex flex-column align-items-center justify-content-center w-50'>
              <p className='py-2 text-uppercase fw-bold fs-xxl-4 fs-xl-5 fs-lg-5'>drop by</p>
              <p className='pb-2 fs-xxl-6 fs-xl-6 fs-lg-6'>LORUM IPSUM, LORUM,<br/> Sri Lanka, 10100</p>
            </div>
          </div>

          <div className={`${styles.footerHeader} col-4 p-0 text-center`}>
              {/* Footer brandname */}
              <div className='row mx-0 w-100 d-flex flex-column align-items-center justify-content-center text-uppercase text-center'>
                <p className='h1 text-uppercase fs-lg-2 fs-xl-1 fs-xxl-1 pt-2 pb-0'>fashion<span className='' style={{letterSpacing:'-2px',marginLeft: '-13px'}}><b>nova</b></span></p>
                <p className='text-capitalize fs-7 '>smiles.. colors.. memories..</p>
              </div>
          </div>

          <div className='col-4 text-center text-uppercase  h-100 d-flex flex-column justify-content-center' style={{borderLeft:'1px solid #BFBFBF'}}>
              {/* Navigate menu */}
              <div className="row mx-0">
                <p className='text-uppercase fw-bold fs-xxl-4 fs-xl-5 fs-lg-5'>navigate</p> 
              </div>
              <div className="row mx-0 w-100">
                  <div className='col-6 d-flex flex-column align-items-center justify-content-between '>
                    <a href="/" className='btn fs-xxl-6 fs-xl-6 fs-lg-7'>Home</a>
                    <a href="/women" className='btn fs-xxl-6 fs-xl-6 fs-lg-7'>woman</a>
                    <a href="/men" className='btn fs-xxl-6 fs-xl-6 fs-lg-7'>men</a>
                  </div>
                  <div className='col-6 d-flex flex-column align-items-center justify-content-between fs-xxl-6 fs-xl-6 fs-lg-7'>
                    <a href="/kids" className='btn fs-xxl-6 fs-xl-6 fs-lg-7'>kids</a>
                    <a href="/aboutus" className='btn fs-xxl-6 fs-xl-6 fs-lg-7'>about us</a>
                    <a href="/contactus" className='btn fs-xxl-6 fs-xl-6 fs-lg-7'>contact us</a>
                  </div>
              </div>
          </div>
        </div>
        <div className="row mx-0 w-100 text-center d-flex justify-content-center align-items-center fs-7" style={{borderTop:'1px solid rgba(0, 0, 0, 0.15)'}}>
            <p className='m-auto fs-7'>© Copyright 2024. FASHIONNOVA. All Rights Reserved   EXE.LK </p>
        </div>
      </div>
      
      {/* footer for md|sm|xs views */}
      <div className='col-12 d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none' style={{background:'rgba(171, 93, 2, 0.06)'}}>
        <div className="row mx-0 ">
          {/* Navigate menu */}
          <div className="col-12 d-flex flex-column text-uppercase">
            <p className='text-center fw-bold fs-6 fs-sm-5 fs-md-4'>navigate</p> 
            <a href="/" className='btn fs-7 fs-sm-6 fs-md-5'>Home</a>
            <a href="/women" className='btn fs-7 fs-sm-6 fs-md-5'>woman</a>
            <a href="/men" className='btn fs-7 fs-sm-6 fs-md-5'>men</a>
            <a href="/kids" className='btn fs-7 fs-sm-6 fs-md-5'>kids</a>
            <a href="/aboutus" className='btn fs-7 fs-sm-6 fs-md-5'>about us</a>
            <a href="/aboutus" className='btn fs-7 fs-sm-6 fs-md-5'>contact us</a>
          </div>
        </div>
        <div className="row mx-0 " >
          {/* Socialize menu */}
          <div className="col-4  p-0" >
            <div className='row mx-0 text-center pt-2' >
              <p className=' text-uppercase fw-bold fs-6 fs-sm-5 fs-md-4'>socialize</p>
            </div>
            <div className='row mx-0 text-center d-flex align-items-center justify-content-center pb-2' >
              <i className="bi bi-facebook w-auto p-0 m-sm-2 m-2 m-md-3"></i>
              <i className="bi bi-instagram w-auto p-0 m-2"></i>
              <i className="bi bi-tiktok w-auto p-0 m-sm-2 m-2 m-md-3"></i>
            </div>
          </div>

          <div className="col-8  p-0">
            <div className='row mx-0 text-center pt-2' >
              <p className=' fw-bold fs-6 fs-sm-5 fs-md-4'>SEND AN EMAIL OR CALL</p>
            </div>
            <div className='row mx-0 text-center d-flex align-items-center justify-content-center pb-2' >
              <i className="bi bi-envelope-open-fill w-auto p-0 m-sm-2 m-2 m-md-3"></i>
              <i className="bi bi-telephone-fill w-auto p-0 m-sm-2 m-2 m-md-3 "></i>
            </div>
          </div>
        </div>
        
        <div className="row mx-0 " >
          <div className="col-4  p-0" >
            <div className='row mx-0 text-center text-uppercase pt-2' >
              <p className='fw-bold fs-6 fs-sm-5 fs-md-4'>drop by</p>
            </div>
            <div className='row mx-0 text-center' >
              <p className='fs-7 fs-sm-6 fs-md-6'>LORUM IPSUM, LORUM,<br/> Sri Lanka, 10100</p>
            </div>
          </div>
          <div className={`${styles.footerHeader} col-8  p-0`}>

              <div className='row w-100 mx-1 mt-3 d-flex flex-column align-items-center justify-content-center text-uppercase text-center' >
                <p className='h1 text-uppercase fs-1 pt-2 pb-0'>fashion<span className='' style={{letterSpacing:'-2px',marginLeft: '-7px'}}><b>nova</b></span></p>
                <p className='text-capitalize fs-7 fs-sm-6 fs-md-6'>smiles.. colors.. memories..</p>
              </div>
          </div>
        </div>
        {/* Footer brandname */}
        <div className="row mx-0  w-100  text-center d-flex justify-content-center align-items-center fs-8 fs-sm-7 fs-md-7" style={{borderTop:'1px solid #BFBFBF'}}>
          © Copyright 2024. FASHIONNOVA. All Rights Reserved   EXE.LK
        </div>
      </div>
    </>
  )
}

export default Footer
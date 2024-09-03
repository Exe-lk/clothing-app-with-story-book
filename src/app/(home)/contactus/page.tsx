import React from 'react';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import contactus from '../../../../public/assets/contact us/contactus.svg';
import map from '../../../../public/assets/contact us/map.svg';
import girl from '../../../../public/assets/contact us/girl.jpg';
import { LiaFaxSolid } from "react-icons/lia";
import Footer from '@/components/Home/Footer/Footer';
import  styles from './page.module.scss';

const page = () => {
  return (
    <div className={`${styles.mainContainer} container-fluid h-100  w-100 m-0 p-0`}>
      <div className={`${styles.banner} row w-100 mx-xxl-0 mx-0 p-1 position-relative h-100`}>
        <div className={`${styles.details} position-absolute top-0 left-0 p-xxl-5 p-xl-4 p-lg-3 p-md-3 p-sm-3 px-3 mx-xxl-5 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-1 my-1 my-lg-5`}>
          <h1 className='mb-xxl-4 mb-xl-4 mb-lg-4 mb-md-4 mb-sm-3 mb-2 mt-5 fw-bolder' style={{color:'rgba(171, 93, 2, 1)'}}>CONTACT US</h1>
          <p className='text-capitalize fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-7 fs-7'>Our curated collection blends comfort with style, ensuring <br />
          you make a statement effortlessly</p>
        </div>
        <img src={contactus.src} alt="contactus" className='img-fluid object-fit-cover mx-0 px-0' />
      </div>
      <div className="row w-100 mx-xxl-0 mx-0 ">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12  px-1 mt-0 d-flex flex-column align-items-start justify-content-between">
          <div className="row mx-0 pt-5 ps-xxl-5 ps-3">
            <h1 className=''>Get in <span style={{color:'rgba(171, 93, 2, 1)'}}>Touch</span></h1>
            <p className='fs-6'>ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <form className='m-1 py-1 px-xxl-5 px-4 w-100 d-grid'>
            <input type="text" className='form-control rounded-1 p-2 my-2 ' placeholder='Name *' style={{border:'1px solid rgba(224, 224, 224, 1)'}}/>
            <input type="text" className='form-control rounded-1 p-2 my-2' placeholder='Email *' style={{border:'1px solid rgba(224, 224, 224, 1)'}}/>
            <input type="text" className='form-control rounded-1 p-2 my-2' placeholder='Phone number *' style={{border:'1px solid rgba(224, 224, 224, 1)'}}/>
            <select className='form-control rounded-1 p-2 my-2' style={{border:'1px solid rgba(224, 224, 224, 1)'}}>
              <option selected>What clothing category do you want? </option> 
              <option >Men </option> 
              <option >Women </option> 
              <option >Kids </option> 
            </select>
            <button className='btn text-uppercase p-2 my-2 text-light p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7' style={{background:'rgba(180, 110, 28, 1)'}}>send</button>
          </form>
          <div className='row p-1 mx-0 w-100'>
            <div className="col-4 d-xxl-flex d-block  text-center align-items-center justify-content-center">
              <i className="bi bi-telephone-outbound fs-6 mx-2"></i>
              <div className='d-block text-center'>
                <p className='p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7'>PHONE</p>
                <p className='p-0 m-0 p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7' style={{color:'rgba(180, 110, 28, 1)'}}>03 5432 1234</p>
              </div>
            </div>
            <div className="col-4 d-xxl-flex d-block align-items-center justify-content-center text-center">
              <LiaFaxSolid  className="mx-2 fs-xxl-4 fs-xl-4 fs-lg-4 fs-md-5 fs-sm-5 fs-5"/>
              <div className='d-block text-center'>
                <p className='p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7'>FAX</p>
                <p className='p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7' style={{color:'rgba(180, 110, 28, 1)'}}>03 5432 1234</p>
              </div>
            </div>
            <div className="col-4 d-xxl-flex d-block align-items-center justify-content-center">
              <i className="bi bi-envelope-at mx-3 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 fs-6"></i>
              <div className='d-block text-center'>
                <p className='p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7'>EMAIL</p>
                <p className='p-0 m-0 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-7 fs-sm-7 fs-7' style={{color:'rgba(180, 110, 28, 1)'}}>info@marcc.com.au</p>
              </div>
            </div>
            
          </div>
        </div>
        {/* <div className={`${styles.imageContainer} col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-2 `}>
          <div className="row mx-0 ">
            <div className={`${styles.image1div} `}>
              <img src={map.src} alt="map" className={`${styles.image1}`}/>
            </div>
            <div className={`${styles.image2div}`} style={{background:'linear-gradient(89.26deg, rgba(255, 255, 255, 0.37) -13.18%, rgba(171, 93, 2, 0.72) 99.27%)'}}>
              <img src={girl.src} alt="girl" className={`${styles.image2} opacity-25`} />
            </div>
          </div>
        </div> */}
        <div className={`${styles.imageContainer} col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 my-2 position-relative h-100`}>
          <img src={map.src} alt="map" className={`${styles.image1} position-absolute end-50 mt-xxl-5 mt-xl-5 mt-lg-5 mt-1`}/>
          <div className='d-xxl-flex d-xl-flex d-lg-flex d-none' style={{background:'linear-gradient(89.26deg, rgba(255, 255, 255, 0.37) -13.18%, rgba(171, 93, 2, 0.72) 99.27%)'}}>
            <img src={girl.src} alt="girl" className={`${styles.image2} opacity-25 position-absolute end-0 top-0`} />
          </div>
        </div>
      </div >
      <div className="row  w-100 mx-0">
        <Footer />
      </div>
    </div>
  )
}

export default page
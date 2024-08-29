import styles from './InstaLove.module.scss';
import React from 'react';
import InstaLoversList from './InstaLoversList';
import Image from 'next/image';
import one from '../../../../public/assets/instaLovers/1.jpg'
import two from '../../../../public/assets/instaLovers/2.jpg'
import three from '../../../../public/assets/instaLovers/3.jpg'
import four from '../../../../public/assets/instaLovers/4.jpg'
import five from '../../../../public/assets/instaLovers/5.jpg'
import six from '../../../../public/assets/instaLovers/6.jpg'

const InstaLove = () => {
  return (
    <>
      <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bolder text-center'>instalove</h1>
      <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'><em>@fashionnova</em> </p>

      {/* for pc views (xxl, xl, lg) */}
      <div className={`${styles.instaLovePc} col-12 mx-auto d-xxl-flex d-xl-flex d-lg-flex d-none align-items-center justify-content-center`} style={{background:'#F5F5F5'}}>
          {
            InstaLoversList.map((item:any,key:any)=>{
              return(
                <ul className='list-unstyled' key={key}>
                  <li className='px-1'>
                    <Image src={item.id} alt='item' className={`${styles.imge} img-fluid h-100 w-100`}/>
                  </li>
                </ul>
              )
            })
          }
      </div>

      {/* for mobile views (md, sm, xs) */}
          <div id="instalove" className={`${styles.instaLoveMobile} carousel slide d-md-block d-sm-block d-block d-xxl-none d-xl-none d-lg-none`} data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#instalove" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#instalove" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#instalove" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#instalove" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#instalove" data-bs-slide-to="4"></button>
              <button type="button" data-bs-target="#instalove" data-bs-slide-to="5"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={one.src} alt='item' className="img-fluid d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={two.src} alt='item' className="img-fluid d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={three.src} alt='item' className="img-fluid d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={four.src} alt='item' className="img-fluid d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={five.src} alt='item' className="img-fluid d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={six.src} alt='item' className="img-fluid d-block w-100" />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#instalove" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#instalove" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
    </>
  )
}

export default InstaLove;

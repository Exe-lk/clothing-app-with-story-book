import React from 'react';

const Subscribe = () => {
  return (
    <>
      <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-7 ms-0 mx-sm-0 mx-xxl-1 mx-xl-1 mx-lg-1 mx-md-1 h-100 d-flex flex-column align-items-center justify-content-center text-uppercase text-start px-0'>
        {/* heading and sub-heading */}
        <p className='fs-xxl-3 fs-xl-4 fs-lg-4 fs-md-5 fs-sm-6 fs-7 mb-xxl-3 mb-xl-3 mb-lg-2 mb-md-2 mb-sm-2 mb-1 fw-bold'>Subscribe to our newsletter </p>
        <p className='fs-xxl-5 fs-xl-6 fs-sm-7 fs-lg-6 fs-md-6 fs-8 mb-2'>LORUM IPSUM DOLLERF!</p>
      </div>
      {/* form for getting inputs */}
      <form className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-5  mx-0 mx-sm-0 mx-xxl-1 mx-xl-1 mx-lg-1 mx-md-1 h-100 d-flex align-items-center justify-content-center my-auto px-0'>
        <input type="text" placeholder='email address' className='form-control w-50 px-0 px-sm-1 px-md-1 me-xxl-4 me-xl-4 me-lg-4 me-md-4 me-sm-3 me-1 rounded-pill fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 px-xxl-3 py-xl-2 py-1'/>
        <button className='btn text-uppercase text-white px-xxl-4 px-xl-4 px-1 py-xxl-1 py-1 fs-xxl-6 fs-xl-6 fs-lg-7 fs-md-7 fs-sm-8 fs-8' style={{background:'#AB5D02',borderRadius: '20px',fontSize:'10px',letterSpacing:'1px'}}>subscribe</button>
      </form>
    </>
  )
}

export default Subscribe
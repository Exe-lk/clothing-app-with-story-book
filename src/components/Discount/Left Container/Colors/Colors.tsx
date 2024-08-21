'use client';
import styles from './Colors.module.scss';
import React, { useEffect, useRef } from 'react';
import { colorsLi } from './ColorsList';
import { useTheme } from '@/components/ThemeContext';

const Colors = () => {
  const {theme} = useTheme();
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const allLink = ref.current.querySelectorAll('div');
    function changeMenuActive(this:any){{
      allLink.forEach(n=>{
        n.classList.remove(`${styles.active}`)
      })
      this.classList.add(`${styles.active}`)
    }}

    allLink.forEach(e=>{
      e.addEventListener('click', changeMenuActive)
    })
  },[])

  return (
    <div className='row text-capitalize p-1 mx-1 my-3'>
      <div className="col-12">
        <p className='fs-xxl-5 fs-xl-6 fs-lg-6 fw-bold'>colors</p>
        <div className={`${styles.colorCont} d-grid px-4 py-1`} style={{gridTemplateColumns: 'auto auto auto auto'}} ref={ref}>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(241, 40, 40, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(94, 236, 91, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(37, 104, 235, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(224, 205, 33, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(25, 104, 85, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(10, 10, 10, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(245, 238, 238, 1)',height:'18px',width:'18px'}}></div>
          <div className={`${styles.colorItem} rounded-circle m-2 p-2 btn`} style={{background: 'rgba(224, 39, 195, 1)',height:'18px',width:'18px'}}></div >
        </div>
      </div>
    </div>
  )
}

export default Colors
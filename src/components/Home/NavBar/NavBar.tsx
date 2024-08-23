'use client';

import styles from './NavBar.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Link from 'next/link'
import Documentation from './Doc/Documentation';
import MainMenu from './Side Bar Main/MainMenu';
import { productList } from '@/dummy data/products';

const categories = [...new Set(productList.map((item:any)=>{
  return item
}))]

const NavBar = () => {
  const {theme} = useTheme();
  const [activeNav, setActiveNav] = useState(false);
  const [sliderOn, setSliderOn] = useState(false);
  const [activeSearchMob, setActiveSearchMob] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [filteredItems, setFilteredItems] = useState(productList);

  const handleInputChange = (e:any) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = productList.filter((item:any) =>
      item.des.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filteredItems);
    console.log(`filtered: ${filteredItems}`)
  }
  const ref = useRef<HTMLUListElement>();
  useEffect(() => {
    window.addEventListener('mouseup',function(e){
      var searchBar = document.getElementById('searchRes');
      if(!(event.target as HTMLElement).closest('#searchRes')){
        searchBar.style.display = 'none';
      }
    }); 
    const allLink = ref.current.querySelectorAll('li');
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
    <nav className={`${styles.navBarContainer} navbar navbar-expand-lg py-0`} aria-label='Offcanvas navbar large bg-white'>

        <button className="navbar-toggler m-md-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{color:'#AB5D02'}} onClick={()=>{
          setActiveNav(!activeNav)
        }}>
          <span className={`${activeNav===true? 'bi bi-x-lg text-black fs-1':'navbar-toggler-icon fs-1'}`}></span>
        </button>
        <div className={`${styles.offcanvas} offcanvas offcanvas-start vw-100`} tabIndex={-1} id="offcanvas" aria-modal='true' role='dialog' aria-labelledby='offcanvasLabel' data-bs-scroll="true" data-bs-backdrop="false">

          <div className={`${styles.search} offcanvas-header d-sm-flex d-md-flex d-flex d-xxl-none d-xl-none d-lg-none flex-column`} style={{zIndex:500}} >
            <div className='row mx-0 w-100'>
              <div className='col-md-6 col-sm-6 col-10 m-auto d-flex d-sm-flex d-md-flex align-items-center justify-content-start justify-content-sm-center justify-content-md-center p-1' style={{height:'60px'}} onClick={()=>{
              setActiveSearchMob(!activeSearchMob)
              }}>
                  <i className="bi bi-search mx-2 btn"></i>
                  <input className={`${styles.searchBar} rounded-pill px-2 py-1`} type="search" placeholder="Search..." id='searchBar' value={searchItem} onChange={handleInputChange}/>
              </div> 
            </div> 

            <div className={`${styles.searchRes} ${activeSearchMob===true? 'd-md-flex d-sm-flex d-flex d-xxl-none d-xl-none d-lg-none' : 'd-none'} row mx-0 w-100 position-fixed overflow-hidden h-auto`} style={{top:'160px'}} id='searchRes'>
              <div className={`col-12 mx-0 mt-2 bg-white rounded-1 flex-column overflow-y-scroll bg-white`}  >
                {filteredItems.length>0 ? filteredItems.map((item:any) => (
                  <Link href={{pathname: `/${item.section}/#`, query: {id: item.id, name: item.des}}} className='text-decoration-none ' key={item.key}>
                    <ul className='row mx-0 btn d-flex align-items-center mt-1 justify-content-center list-unstyled fw-bold ' data-bs-toggle="offcanvas" >
                      <li className='col-3 '>
                        <img src={item.name.src} alt="item" className='img-fluid h-100' style={{width:'50px',height:'70px'}}/>
                      </li>
                      <li className='col-6 overflow-hidden'>{item.des}</li>
                      <li className='col-3 '>{item.price}</li>
                    </ul>
                  </Link>
                )): <div className='d-flex align-items-center justify-content-center'><p className='fs-5 '>No matching items found...</p> </div>}
              </div>
            </div>
          </div>
          <div className='offcanvas-body d-xxl-flex d-xl-flex d-lg-flex d-none align-items-center justify-content-center vw-100'>
            {/* <div className={`${styles.searchArea} row mx-0 mt-2`} >
              <div className={`${styles.searchRes} bg-white rounded-4 flex-column`} id='searchRes'></div>
            </div> */}
            <ul className={`${styles.navBar} navbar-nav text-capitalize fs-5  d-flex justify-content-center`} ref={ref}>
                
                <li className="nav-item mx-4">
                  <Link className={`${styles.navLink} nav-link`} aria-current="page" href="/">home</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link href="/women" className={`${styles.navLink} nav-link`}>women</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link href="/men" className={`${styles.navLink} nav-link`}>men</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link href="/kids" className={`${styles.navLink} nav-link`}>kids</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link href="/aboutus" className={`${styles.navLink} nav-link`}>about us</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link href="/contactus" className={`${styles.navLink} nav-link`}>contact us</Link>
                </li>
                
              </ul>
          </div>

          <div className='offcanvas-body d-xxl-none d-xl-none d-lg-none d-flex flex-column'>
            <div className='row mx-0 fs-5'>
              {/* Slider for documentation */}
              <div className="form-check form-switch fs-md-3 fs-sm-4 fs-4 d-flex align-items-center justify-content-center my-2 col-12  mx-4">
                <input className={`${styles.switch} form-check-input me-4`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{
                  setSliderOn(!sliderOn)
                }} />
                <label className="form-check-label fs-md-3 fs-sm-4 fs-4" htmlFor="flexSwitchCheckDefault">Documentation</label>
              </div>
            </div> 
          
            <div className="row mx-0 mt-4 ">
              {sliderOn===true && activeNav===true ?(<Documentation />):(<MainMenu/>)}
            </div>
          </div>
          {/* <div className='offcanvas-backdrop fade'></div> */}
        </div>
    </nav>
  )
}

export default NavBar;
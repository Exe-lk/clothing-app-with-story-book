import styles from './Heading.module.scss';
import { TfiAlignCenter } from "react-icons/tfi";
import React, { useState } from 'react';
import ShoppingItems from '../../../../components/Discount/Right Container/ShoppingItems';


const Heading = () => {
  const [selectedValue,setSelectedValue] = useState("all");
  const handleRadioChange = (value:any) => {
    setSelectedValue(value);
  };
  return (
    <div className='row text-capitalize p-1 mx-1 fs-xxl-5 fs-xl-5 fs-lg-6 my-3'>
      <div className="col-6 col-lg-9 d-flex justify-content-between align-items-center w-100">
        <p className='d-block my-auto'>categories</p>
        <div className="dropdown">
          <button className="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'rgb(171, 93, 2)'}}>
            {selectedValue}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" onChange={(e:any) => setSelectedValue(e.target.value)}>
            <li value={selectedValue} ><a className="dropdown-item" href="#">All</a></li>
            <li value={selectedValue} ><a className="dropdown-item" href="#">Women</a></li>
            <li value={selectedValue} ><a className="dropdown-item" href="#">Men</a></li>
            <li value={selectedValue} ><a className="dropdown-item" href="#">Kids</a></li>
          </ul>
        </div>
      </div>
      {/* <ShoppingItems category={selectedValue} /> */}
    </div>
  )
}

export default Heading
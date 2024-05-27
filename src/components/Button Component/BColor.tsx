import styles from './BColor.module.scss';
import React, {useState} from 'react';

const BColor = () => {

  const [color, setColor] = useState('#FFF');

  return (
    <div className={styles.bColor}>
      <button  className={styles.button} style={{backgroundColor: color}}>change me</button>
      <input id = "colorpicker" type="color" value={color} onChange={(e)=>{
        setColor(e.target.value)
      }}/>
    </div>
  )
}

export default BColor
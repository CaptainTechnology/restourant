import React, { useState } from 'react'
import './style.css'

const Hooks = () => {
  const initialData=10
  const [menudata, setmenudata] = useState(initialData);

  
  return (
    <>
      <div className="center_div">
        <p>{menudata}</p>
        <div className="button2" onClick={()=>{setmenudata(menudata+1)}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increase
        </div>
        <div className="button2" onClick={()=>{
          if(menudata<=0){
            setmenudata(0)
          }else{
            setmenudata(menudata-1)}}
          }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Descrease
        </div>

      </div>
    </>
  )
}

export default Hooks

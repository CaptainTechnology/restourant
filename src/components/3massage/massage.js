import React, { useState, useEffect } from 'react'
import './style.css'

const Hooks = () => {
  const initialData = 0
  const [menudata, setmenudata] = useState(initialData);

  useEffect(()=>{
    document.title=`Chats(${menudata})`
  })

  return (
    <>
      <div className="center_div">
        <p>{menudata}</p>
        <div className="button2" onClick={() => { setmenudata(menudata + 1) }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          send massage
        </div>
      </div>
    </>
  )
}

export default Hooks

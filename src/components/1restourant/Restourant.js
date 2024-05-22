import React ,{useState} from 'react'
import css from "./Style.css"
import menu from "./menu.js"
import Menucard from './menucard.js'
import Navbar from './navbar.js'
import Menu from './menu.js'

 const uniquelist=[
  ...new Set(
    Menu.map((crtElm)=>{
      return crtElm.category;
    })
  ),"All"
 ];

const Restourant = () => {
  const [menudata,setmenudata]=useState(menu);
  const [menulist,setmenulist]=useState(uniquelist);

  const filteritem=(category)=>{
    if(category==="All"){
      setmenudata(Menu);
      return;
    } 
    const updatedlist=menu.filter((curtel)=>{
      return curtel.category===category;
    })
    setmenudata(updatedlist);
  }
  return (
    <>
    <Navbar filteritem={filteritem} menulist={menulist}/>
    <Menucard data={menudata}/>
    </>
  )
}

export default Restourant

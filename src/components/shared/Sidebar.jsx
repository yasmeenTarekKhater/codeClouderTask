import React, { useState } from 'react';
import { SlMenu } from "react-icons/sl";
import { NavLink } from 'react-router-dom';

import  MyNavbar  from '../shared/Navbar';
import {menuItem} from '../../data/SidebarData.js';
import logo from '../../assets/images/Logo.png';
import './css/Sidebar.css';


const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  return (
        <div className='d-flex'>

        {/* -------------- sidebar desgin ------------ */}
        <div style={{width:isOpen?"270px":"60px"}} className='sidebar'>
                <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none"}} className="logo" src={logo} />
                   <div style={{marginLeft: isOpen ? "50px" : "7px"}} className="bars">
                   <SlMenu  cursor='pointer' onClick={toggle} />
                   </div>
                 
             </div>
             {
                    menuItem.map((item,index)=>{
                      return(
                         <NavLink to={item.path} key={index} className="linkdash" activeclass="active">
                              < img src={item.icon} alt='icon' className='icon'/>
                              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                         </NavLink>
                        
                      )
                    })
              }
        </div>

         {/* -------------- here we can show pages with navbar fixed on top ------------ */}
        <main>
           <MyNavbar/>
           {children}
        </main>
        </div>
        
    
    
  )
}

export default Sidebar;
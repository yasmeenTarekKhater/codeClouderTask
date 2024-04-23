import React, { useState } from 'react';
import './css/Sidebar.css';
import dashboard from '../../assets/icons/dashboard.png';
import activity from '../../assets/icons/activity.png';
import report from '../../assets/icons/report.png';
import tag from '../../assets/icons/tag.png';
import wallet from '../../assets/icons/wallet.png';
import calendar from '../../assets/icons/calendar.png';
import chat from '../../assets/icons/chat.png';
import call from '../../assets/icons/call.png';
import settings from '../../assets/icons/settings.png';
import logo from '../../assets/images/Logo.png';
import { SlMenu } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import  MyNavbar  from '../shared/Navbar';

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    {
        path:"/",
        name:"Overview",
        icon:dashboard
    },
    {
        path:"/activity",
        name:"Activity",
        icon:activity
    },
    {
        path:"/spreadsheets",
        name:"Spreadsheets",
        icon:report
    },
    {
        path:"/coupons",
        name:"Coupons",
        icon:tag
    },
    {
        path:"/wallet",
        name:"Wallet",
        icon:wallet
    },
    {
        path:"/schedule",
        name:"Schedule",
        icon:calendar
    },
    {
      path:"/message",
      name:"Message",
      icon:chat
    },
    {
      path:"/support",
      name:"Support",
      icon:call
    },
    {
      path:"/setting",
      name:"Setting",
      icon:settings
    }

]
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
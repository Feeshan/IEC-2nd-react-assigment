import React  from 'react';

import { NavLink } from 'react-router-dom';
import img from "../image/feeshan.jpg";


const Sidebar = ({children}) => {
    
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
        },
        {
            path:"/about",
            name:"About",
        
        },
        {
            path:"/resume",
            name:"Resume",
        },
        {
            path:"/portfolio",
            name:"Portfolio",
        },
        {
            path:"/Contact",
            name:"Contact",
        }
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
                   <h1 className="logo"><img width={180} src={img} alt='logo'/></h1>
                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div  className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
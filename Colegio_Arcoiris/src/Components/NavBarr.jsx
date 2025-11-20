import {Link} from "react-router-dom";
import {IconContext} from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { useState } from "react";
import "./NavBarr.css"


const Data =[

    {
        title:'Inicio',
        path:'/',
        Cname:'nav-text',
    },
     {
        title:'Nosotros',
        path:'/nosotros',
        Cname:'nav-text',
    },
     {
        title:'Niveles',
        path:'/niveles',
        Cname:'nav-text',
    },
     {
        title:'Inicial',
        path:'/inicial',
        Cname:'nav-text',
    },
     {
        title:'Primaria',
        path:'/primaria',
        Cname:'nav-text',
    },
     {
        title:'Secundaria',
        path:'/secundaria',
        Cname:'nav-text',
    },
     {
        title:'Servicios',
        path:'/servicios',
        Cname:'nav-text',
    },
     {
        title:'Transparencia',
        path:'/transparencia',
        Cname:'nav-text',
    },
]






export function NavBarr(){


    const [sidebar, setSidebar] = useState(false);


    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div>


        <IconContext.Provider value={{color:"#000"}}>

            <div className="navbar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>


              <nav className={sidebar ? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    {Data.map((item, index)=>{
                        return(
                        <li key={index} className={item.cName}>

                            <Link to={item.path}><span >{item.title}</span></Link>
                            
                        </li>
                    )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>

          
        </div>
    );
}
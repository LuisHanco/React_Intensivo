import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const Data =[

    {
        title:'Inicio',
        path:'/',
        cName:'nav-text',
        icon: <AiIcons.AiFillHome />,
      
    },
     {
        title:'Nosotros',
        path:'/nosotros',
        cName:'nav-text',
    },
     {
        title:'Niveles',
        path:'/niveles',
        cName:'nav-text',
         icon: <FaIcons.FaCartPlus />,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
         {
        title:'Inicial',
        path:'/inicial',
        cName:'nav-text',
    },
     {
        title:'Primaria',
        path:'/primaria',
        cName:'nav-text',
    },
     {
        title:'Secundaria',
        path:'/secundaria',
        cName:'nav-text',
    },
  
        ]
    },
     
     {
        title:'Servicios',
        path:'/servicios',
        cName:'nav-text',
    },
     {
        title:'Transparencia',
        path:'/transparencia',
        cName:'nav-text',
        icon: <IoIcons.IoIosPaper />,
    },
]
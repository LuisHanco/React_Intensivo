import {BrowserRouter, Routes, Route} 
from "react-router-dom";

import {NavBarr} from "../Components/NavBarr"
import {Home} from "../pages/Home";
import {Admision} from "../pages/Admision"
import {Nosotros} from '../pages/Nosotros'
import {Inicial} from "../pages/Inicial"
import {Primaria} from "../pages/Primaria"
import {Secundaria} from "../pages/Secundaria"
import {Transparencia} from "../pages/Transparencia"
import {Servicios} from "../pages/Servicios"
import {Niveles} from "../pages/Niveles"
export function MyRoutes(){
    return (

    <BrowserRouter>
    <NavBarr/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Admision" element={<Admision/>}/>
        <Route exact path="/Nosotros" element={<Nosotros/>}/>
        <Route exact path="/Inicial" element={<Inicial/>}/>
        <Route exact path="/Primaria" element={<Primaria/>}/>
        <Route exact path="/Secundaria" element={<Secundaria/>}/>
        <Route exact path="/Transparencia" element={<Transparencia/>}/>
        <Route exact path="/Servicios" element={<Servicios/>}/>
        <Route exact path="/Niveles" element={<Niveles/>}/>
        
        
    </Routes>
    </BrowserRouter>

    );
}
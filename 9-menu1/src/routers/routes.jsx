import {BrowserRouter, Routes, Route} 
from "react-router-dom";


import {_Home_, Home} from "../pages/Home";

export function MyRoutes(){
    return (<BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>);
}
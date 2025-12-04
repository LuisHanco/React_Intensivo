import { Inicial } from "./Inicial";
import { Primaria } from "./Primaria";
import { Secundaria } from "./Secundaria";

export function Niveles(){
    return (<h1>Niveles</h1>);
}


export function Ini(){
    return (<Inicial/>)
}


export function Pri(){
    return (<Primaria/>)
}

export function Sec(){
    return (<Secundaria/>)
}

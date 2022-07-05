import React from "react";
import '../css/Boton.css'

function Boton(props){

    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.' && (valor !== '='))
    };

    return(
        <div 
            className={`btn ${esOperador(props.children) ? 'btn-operador' : 'btn-numero'}`}
            onClick={()=>props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;
import React from "react";
import '../css/BotonLimpiar.css';

const BotonLimpiar = (props) =>(
    <div className="boton-limpiar"
    onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonLimpiar;
import '../css/App.css';
import Boton from './Boton';
import Salida from './Salida';
import BotonLimpiar from './BotonLimpiar';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input,setInput]=useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcular = () =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Ingrese valores");
    }
  };

  return (
    <div className="App">
      <div className='calculadora'>
        <Salida input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <BotonLimpiar manejarClear={()=>setInput('')}>C</BotonLimpiar>
        </div>
      </div>
    </div>
  );
}

export default App;

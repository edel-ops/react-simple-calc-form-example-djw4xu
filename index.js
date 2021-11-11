import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function FormularioSuma() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function manejadorCambio(e) {
    // la e hace referencia al objeto proveniente del input tag
    setNum(e.target.value);
  }

  function manejadorSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={manejadorSubmit}>
  <input type="number" value={num} onChange={manejadorCambio} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

const el = <FormularioSuma />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
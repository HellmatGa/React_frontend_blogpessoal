import React from 'react'
import Home from './pages/home/Home'
import '/.App.css';
import React, { useState } from 'react';

function App(){
  return (
    <Home
    title='Componente Home'
    description='Este é um componente Home que recebe props.'
    />
  );
}


function App(){
  const [valor, setValor] = useState(0);
  function handleClick() {
    setValor(valor + 1);
  }
  return (
    <div>
      <h1>app</h1>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App
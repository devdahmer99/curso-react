import React from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';


const HandleButtonClick = () => {
    alert('O Botão foi clicado!');
}

const App = () => {
  return (
    <div>
      <Header title="Este é um exemplo de uma prop"/>
      
      <button onClick={HandleButtonClick}>Clique Aqui!</button>

      <Photo src="https://www.google.com.br/google.jpg" legend="Google"/>

      </div>
  )
}


export default App;
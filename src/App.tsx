import React from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';

/*const App = () => {
  let name: string = 'Eduardo';
  let n1: number = 2;
  let n2: number = 4;

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

  return (
    <div>Soma: {somar(n1,n2)}</div>
  );
}*/



const App = () => {
  return (
    <div>
      <Header title="Este é um exemplo de prop"/>
      
      Olá, Mundo!

      <Photo src="https://www.google.com.br/google.jpg" legend="Google"/>
      </div>
  )
}



export default App;
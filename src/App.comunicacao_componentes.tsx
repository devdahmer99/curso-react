import React from 'react';
import { Botao } from './components/Botao';

const App = () => {
    let textBotao = 'Clicar no Botão';

    const botaoEventAction = (txt:string) => {
        alert('Frase do App '+txt);
    }

    return (
        <div>
             <Botao text={textBotao} clickFN={botaoEventAction}/>
        </div>
       
    )

}



export default App;
import React from 'react';
import { Pessoa } from './components/Pessoa';
const App = () => {
 let list = [
    {name: 'Eduardo', age: 23},
    {name: 'Valdomiro', age: 75},
    {name: 'Paulo', age: 45},
    {name: 'Jorge', age: 42}
 ];

 return (

        <div>
            <h2>Lista de Presença</h2>
            <ul>
                {list.map((item, index)=>(
                    <Pessoa key={index} data={item}/>
                ))}
            </ul>
        </div>
       
    )

}



export default App;
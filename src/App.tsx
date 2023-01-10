import {useState} from 'react';

const App = () => {
  const [name, setName] = useState('Eduardo');

  const handleClick = () => {
    setName('Pedro');
  }


  return (
    <div>
      Meu nome é: {name}
        <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}


export default App;
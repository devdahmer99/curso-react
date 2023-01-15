import { useState } from "react";
const App = () => {
    const [color, setColor] = useState('#FF0000');
    const [padding, setPadding] = useState(0);

    const handleClick = () => {
        setColor('#00FF');
        setPadding(20);
    }


    return (
     <div>
        <button
        onClick={handleClick} 
        style={{
            backgroundColor: color,
            color: '#FFF',
            border: '0',
            padding: padding
        }}>Clique aqui</button>
     </div>
    );
}

export default App;
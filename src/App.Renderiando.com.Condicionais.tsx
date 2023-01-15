import React, {useState} from "react";


const App = () => {
    const [show, setShow] = useState(false);

    const handleClck = () => {
        setShow(!show);
    }

return (
    <div>
        <button onClick={handleClck}>{show ? 'Ocultar' : 'Mostrar'}</button>

        {show && 
        <div>
            Texto Qualquer
        </div>
        }
    </div>
);

}


export default App;
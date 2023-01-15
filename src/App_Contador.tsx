import React, {useEffect} from 'react';
import ContactForm from './contact';

function App() {
  useEffect(() => {
    if(document) {
      const folhaEstilo = document.createElement("link");
      folhaEstilo.rel = "stylesheet";
      folhaEstilo.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(folhaEstilo);
    }
  }, []);
  
  return (
    <div className='App'>
        <header className="App-Header">
          <div className="py-6">
            <ContactForm/>
          </div>
        </header>
    </div>
  );
}

export default App;
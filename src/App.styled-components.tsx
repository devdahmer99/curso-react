
import styled from "styled-components";

const Container = styled.div `
    background-color: blue;
    color: white;
    padding: 20px;
`;

const Botao = styled.button `]
    font-size: 40px;
    margin-left:10px;
`; 

const App = () => {

    return (
      <Container>
        Texto do Componente
        <Botao>Clique aqui!</Botao>
      </Container>
    ) ;



    /*const [color, setColor] = useState('#FF0000');
    const [padding, setPadding] = useState(0);

    const handleClick = () => {
        setColor('#00FF');
        setPadding(20);
    }

    return (
        <Botao/>
     );
*/

   /*return (
     <div>
        <button className="botao"
        onClick={handleClick} 
        style={{
            backgroundColor: color,
            color: '#FFF',
            border: '0',
            padding: padding
        }}>Clique aqui</button>
     </div>
    );*/
}

export default App;
type Props = {
    text: string;
    clickFN: (txt: string) => void;
}

export const Botao = ({text, clickFN }: Props) => {

    const handleClick = () => {
        clickFN("frase");
    }

    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}
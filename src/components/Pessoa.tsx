type Props = {
    data: {
        name: string;
        age: number;
    }
}

export const Pessoa = ({data}: Props)=>{
    return (

        <li>
            este usuário {data.name} -  tem {data.age} anos
        </li>
    )
}
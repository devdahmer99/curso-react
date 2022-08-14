import {ReactNode} from 'react';

type Props = {
    src:string;
    legend:string;
    children: ReactNode;
}

export const Photo = ({src, children, legend}: Props) => {
    return (
       <>
            <img src={src}/>
            <p>{legend}</p>
       </>
    );
}
import Link from 'next/Link'

export default function Navegador(props){
    return(
        <Link href={props.destino}>
            Estiloso
        </Link>
    )
};
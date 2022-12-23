import React from 'react'
import Filho from './Filho.jsx';

const Pai = (props) => {
    return(
    <div>
        <h1>Família: {props.sobrenome}</h1>
        <h2>Cidade: {props.cidadeNatal}</h2>
        <h2>Filhos:</h2>

        <Filho nome='Vinicius' idade={11}/>
        <Filho nome='Lais' idade={7}/>
        <Filho nome='Felipe' idade={4}/>
    </div>
)}

export default Pai;
import React from 'react'

export default props => {
    return(
    <div>
        <h1>Dentro do componente</h1>
        <h2>Olá {props.nome}!!</h2>
        <h3>Endereco {props.endereco}</h3>
        <h4>Idade {props.idade}</h4>
    </div>
)};

import React, {useState} from 'react'

const gerarIdade = () => parseInt(Math.random() * (70 - 20))

const Filho = (props) => {

    return (
        <div>
            <h2>Filho</h2>
            <button onClick={
                function(e) {
                    props.quandoClicar('Joao', gerarIdade())
                }
            }>Clique Aqui
            </button>
            <br></br>
            <br></br>
        </div>
    )
}
export default Filho;
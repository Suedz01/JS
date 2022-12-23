import React from 'react'

const Botoes = ({Inc, Dec}) => {

    return(
        <div className = 'Botoes'>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>
        </div>
    )
}
export default Botoes;
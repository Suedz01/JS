import React from 'react'

const Label = ({passo, setPasso}) => {

    return(
        <div className = 'Label'>
            <label htmlFor='passoInput'>Passo</label>
            <input id='passoInput'
                typeof='number'
                value={passo}
                onChange={ e => setPasso(+e.target.value)}></input>
        </div>
    )
}
export default Label;
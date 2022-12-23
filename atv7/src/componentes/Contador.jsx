import React, {useState} from 'react';
import Display from './Display';

const Contador = () => {
    const [numero, setNumero] = useState(0);
    const [passo, setPasso] = useState(2);

    const Inc = () => {
        setNumero (numero + passo);
    }

    const Dec = () => {
        setNumero (numero - passo);
    }

    function definicao(numeroParam)
    {
        numeroParam = numero;
        console.log(numeroParam);
        setNumero(numeroParam);
    }

    return(
        <div className='Contador'>
            <h2>Contador</h2>
            < Display quandoClicar = {definicao}/>
            {/*<h3>Valor Atual: {numero}</h3>*/}
            <div>
                <label htmlFor='passoInput'>Passo</label>
                <input id='passoInput' typeof='number'
                    value={passo}
                    onChange={ e => setPasso(+e.target.value)}></input>
            </div>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>


        </div>
    )
}
export default Contador;
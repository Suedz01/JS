import React, {useState} from 'react'
import Display from './Display';
import Botoes from './Botoes';
import Label from './Label';


const Contador = () => {

    const [passo,setPasso] = useState(3);
    const [numero,setNumero] = useState(0);
  
    const Inc = () => {
      setNumero(numero + passo);
    }
    const Dec = () => {
      setNumero(numero - passo);
    }

    return(
        <div className = 'Contador'>
            <h3>Contador</h3>
            <Display numero = {numero}/>
            <Label passo = {passo} setPasso = {setPasso}/>
            <Botoes Inc = {Inc} Dec = {Dec}/>

        </div>
    )
}
export default Contador;
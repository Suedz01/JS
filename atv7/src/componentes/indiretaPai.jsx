import React, {useState} from 'react'
import Filho from './indiretaFilho.jsx';

const Pai = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);


    function carregaInformacoes(nomeParam, idadeParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        console.log('------------------------')
        console.log('Dentro da funcao do pai')
        console.log(nome)
        console.log(idade)
        console.log('------------------------')
    }

    return (
        <div>
            <h2>Pai = {nome}</h2>
            <h3>Idade = {idade}</h3>
            <br></br>
            <br></br>
            <Filho quandoClicar={carregaInformacoes} />

        </div>
    )
}
export default Pai;
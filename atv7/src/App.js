import logo from './logo.svg';
import './App.css';
import Componente from './componentes/Componente';
import React, {useState} from 'react';

//import Pai from './componentes/Pai.jsx';
//import Filho from './componentes/Filho.jsx';

import Pai from './componentes/indiretaPai';
import Filho from './componentes/indiretaFilho';

import Contador from './componentes/Contador';


//TAREFA: Utilizar os Componentes para o Contador
//Contador
//Display
//Botões

function App() {
  
  const [nome, setNome] = useState('Fulano'); //Set function
  const [endereco, setEndereco] = useState('Rua XX, YY'); //Set function
  const [idade, setIdade] = useState(15); //Set function
  //const [contador, setContador] = useState(0); //Set function

  /*Sem UseState
  const SetNome2 = (nome) => {
    nome = nome
  }*/

  const verificaUseState = () => {
    console.log(nome);
    setNome('Marcio');
  }

  function carregaInformacoes(nomeParam,idadeParam){
    setNome(nomeParam);
    setIdade(idadeParam);
    console.log('----------------');
    console.log('Dentro da Função Pai:');
    console.log(nome);
    console.log(idade);
    console.log('----------------');

  }

  return (
    <div className="App">
      
       {/*<h1>Testandooo</h1>
       <Componente nome = {nome}
       endereco = {endereco}
       idade = {idade}/>
       <button onClick={verificaUseState}>Verificar</button>*/}

      {/*Chamada Direta*/}
      {/*<Pai sobrenome = 'Tahara'
      cidadeNatal ='Ribeirão Preto'/>*/}

      {/*Chamada Indireta*/}
      {/*<h2>Filho = {nome}</h2>*/}
      {/*<h2>Idade = {idade}</h2>*/}
      {/*<Filho quandoClicar={carregaInformacoes}/>*/}

      <Contador />

    </div>
  );
}

export default App;

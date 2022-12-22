import React, {useState} from 'react'
import { Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// To make rows collapsible
import "bootstrap/js/src/collapse.js";
import '../css/Cliente.css'


export const cpfMask = value => {    
    console.log('Dentro do CPF');
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }

const Cliente = (props) => {
  const [nome, setNome]           = useState('');
  const [email, setEmail]         = useState('');
  const [endereco, setEndereco]   = useState('');
  const [cpf, setCPF]             = useState('');

  function mensagem(e) {
      console.log('#### Dados Recebidos ###');
      console.log(nome);
      console.log(email);
      console.log(endereco);
      console.log(cpf);
  }

  function limpar(e) {
      setNome('');
      setEmail('');
      setEndereco('');
      setCPF('');
  }


  return (
    <div>
        <div className="CadastroEmpresas">
            <div className="ContainerCadastro" style={{marginTop: '10px'},{marginLeft:'70px'}}>
                <h2>Cadastro de Clientes</h2>
            </div>
            <div className="Formulario" style={{marginTop: '10px'},{marginLeft:'80px'}}>
                <Form style={{ margin: '5px' }}>
                    <Row>
                        <Col sm={6}>
                            <div className="txtDescricao" >
                            <Form.Label className="text-left" style={{ width: "100%" }}>Nome</Form.Label>
                            <Form.Control                                         
                                value={nome}
                                onChange={e=>setNome(e.target.value)}
                                />                                        
                            </div>
                        </Col>
                        <Col sm={3}>
                        <div className="txtEmail" >
                            <Form.Label className="text-left" style={{ width: "100%" }}>E-mail</Form.Label>
                            <Form.Control type='email'                                        
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                />                                        
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="comboSexo" >
                                <Form.Label className="text-left" style={{ width: "100%" }}>Sexo</Form.Label>
                                <Form.Control as="select" defaultValue="Selecione..." >
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </Form.Control>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="txtEndereco" >
                            <Form.Label className="text-left" style={{ width: "100%" }}>Endereço</Form.Label>
                            <Form.Control                                         
                                value={endereco}
                                onChange={e=>setEndereco(e.target.value)}
                                />                                        
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="txtCPF" >
                            <Form.Label className="text-left" style={{ width: "100%" }}>CPF</Form.Label>
                            <Form.Control                                         
                                value={cpf}
                                onChange={e=>setCPF(cpfMask(e.target.value))}
                                />                                        
                            </div>
                        </Col>

                    </Row>

                    <br></br>
                    <div>
                        <Button onClick={
                            () => limpar()
                        } size="xl"
                        variant="danger">Excluir</Button>{' '}

                        <Button onClick={
                            () => mensagem()
                        } size="xl"
                        variant="success">Salvar</Button>

                    </div>                    
                </Form>
            </div>
        </div>
    </div>
    )
}
export default Cliente;



{/* <h2>Cadastro de Empresas</h2>
</div>
<div className="Formulario" style={{marginTop: '10px'},{marginLeft:'80px'}}>
<Form style={{ margin: '5px' }}> */}



{/* <Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label className="text-left" style={{ width: "100%" }}>
    Email
  </Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>
</Form> */}


//     class Empresas extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             descricao: '',
//             endereco: '',
//             cidade: '',
//             estado: '',
//             cep: '',
//             email: '',
//             cpf: '',
//             optionTipoSelected: 'CPF',
//             data: [{'id': 11, 'name': 'teste', 'price': 15.99},
//             {'id': 2, 'name': 'teste2', 'price': 45.99},
//             {'id': 33, 'name': 'teste3', 'price': 5.99},
//             {'id': 104, 'name': 'teste4', 'price': 55.99}],
//         };
//         this.handlechangeTipo = this.handlechangeTipo.bind(this)
//         this.handlechangeCEP = this.handlechangeCEP.bind(this)
//         this.setOptionSelected = this.setOptionSelected.bind(this)
//         this.handlechangeEndereco = this.handlechangeEndereco.bind(this)
//         this.handlechangeCidade = this.handlechangeCidade.bind(this)
//         this.handlechangeEstado = this.handlechangeEstado.bind(this)
//         this.handlechangeBairro = this.handlechangeBairro.bind(this)
//     }

//     selecionarEmpresa = (idEmpresa) => {
//         console.log(idEmpresa)
//     }


//     sendValues2 = () => {
//         console.log("Aeeee")
//     }

//     setOptionSelected(e) {                        
//         this.setState({ optionTipoSelected: e.target.value })
//         // console.log(this.state.optionTipoSelected)        
//     }

//     handlechangeEndereco(e) {
//         this.setState({ endereco: e.target.value })

//     }

//     handlechangeCidade(e) {
//         this.setState({ cidade: e.target.value })        
//     }

//     handlechangeEstado(e) {
//         this.setState({ estado: e.target.value })        
//     }

//     handlechangeBairro(e) {
//         this.setState({ bairro: e.target.value })        
//     }

//     handlechangeTipo(e) {                        
//         if(this.state.optionTipoSelected == 'CPF')
//             this.setState({ cpf: cpfMask(e.target.value) })            
//         else
//             this.setState({ cpf: cnpjMask(e.target.value) })
//     }    


//     async handlechangeCEP(e) {
//         this.setState({ cep: cepMask(e.target.value) })        
//         if((String(e.target.value).length) == 9) {
//             let cepPonto = e.target.value;
//             let cepSemPonto = cepPonto.replace('-', '');
//             let retorno = await api.get(`https://viacep.com.br/ws/${cepSemPonto}/json`);
//             console.log(retorno.data.logradouro)
//             this.setState({ endereco: retorno.data.logradouro})
//             this.setState({ bairro: retorno.data.bairro })
//             this.setState({ cidade: retorno.data.localidade })
//             this.setState({ estado: retorno.data.uf })
//         }
//     }
   
//     handlechangeCNPJ(e) {
//         console.log(e.target.value)
//         this.setState({ cpf: cnpjMask(e.target.value) })
//     }    

//     render() {
//         console.log(this.state.optionTipoSelected)
//         return (
//             <div className="CadastroEmpresas">
//                 <div className="ContainerCadastro" style={{marginTop: '10px'},{marginLeft:'70px'}}>
//                     <h2>Cadastro de Empresas</h2>
//                 </div>
//                 <div className="Formulario" style={{marginTop: '10px'},{marginLeft:'80px'}}>
//                     <Form style={{ margin: '5px' }}>
//                         <Form.Row>
//                             <Col sm={8}>
//                                 <div className="txtDescricao" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>Razão Social</Form.Label>
//                                 <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={4}>
//                             <div className="txtEmail" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>E-mail</Form.Label>
//                                 <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                         </Form.Row>

//                         <br></br>

//                         <Form.Row>
//                             <Col sm={2}>
//                                 <div className="comboCPF_CNPJ" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>CPF/CNPJ</Form.Label>
//                                     <Form.Control as="select" defaultValue="Selecione..." onChange={this.setOptionSelected}>
//                                         <option>CPF</option>
//                                         <option>CNPJ</option>
//                                     </Form.Control>
//                                 </div>
//                             </Col>
//                             <Col sm={4}>
//                                 <div className="txtCPF_CNPJ" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>CPF/CNPJ</Form.Label>
//                                     <Form.Control type='text' onChange={this.handlechangeTipo}
//                                     value={this.state.cpf}/>
//                                 </div>
//                             </Col>
//                             <Col sm={2}>
//                                 <div className="comboEstabelecimento" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Estabelecimento</Form.Label>
//                                     <Form.Control as="select" defaultValue="Selecione...">
//                                         <option>01 - CNPJ</option>
//                                         <option>02 - CNO</option>
//                                         <option>03 - CAEPF</option>
//                                     </Form.Control>
//                                 </div>
//                             </Col>
//                             <Col sm={4}>
//                                 <div className="txtIE" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Inscrição</Form.Label>
//                                     <Form.Control type='text'/>
//                                 </div>
//                             </Col>
//                         </Form.Row>

//                         <br></br>

//                         <Form.Row>
//                             <Col sm={2}>
//                                 <div className="txtCEP" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>CEP</Form.Label>

//                                     <Form.Control type='text' onChange={this.handlechangeCEP}
//                                         value={this.state.cep}/>                                    
//                                 </div>
//                             </Col>
//                             <Col sm={10}>
//                                 <div className="txtEndereco" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Endereço</Form.Label>
//                                     <Form.Control                                         
//                                     value={this.state.endereco}
//                                     onChange={this.handlechangeEndereco}
//                                     />                                        
//                                 </div>
//                             </Col>
//                         </Form.Row>

//                         <br></br>

//                         <Form.Row>
//                             <Col sm={4}>
//                                 <div className="txtBairro" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Bairro</Form.Label>
//                                     <Form.Control
//                                     value={this.state.bairro}
//                                     onChange={this.handlechangeBairro}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={6}>
//                                 <div className="txtCidade" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Cidade</Form.Label>
//                                     <Form.Control
//                                     value={this.state.cidade}
//                                     onChange={this.handlechangeCidade}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={2}>
//                             <div className="txtEstado" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>Estado</Form.Label>
//                                 <Form.Control                                         
//                                     value={this.state.estado}
//                                     onChange={this.handlechangeEstado}
//                                 />                                        
//                                 </div>
//                             </Col>
//                         </Form.Row>

//                         <br></br>

//                         <Form.Row>
//                             <Col sm={3}>
//                             <div className="txtCNAE" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>CNAE</Form.Label>
//                                 <Form.Control
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>                                
//                             <Col sm={3}>
//                             <div className="txtContato" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>Contato</Form.Label>
//                                 <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={3}>
//                             <div className="txtTelFixo" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>Telefone Fixo</Form.Label>
//                                 <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={3}>
//                             <div className="txtTelCelular" >
//                                 <Form.Label className="text-left" style={{ width: "100%" }}>Telefone Celular</Form.Label>
//                                 <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                         </Form.Row>
//                         <br></br>
//                         <Form.Row>
//                             <Col sm={4}>
//                                 <div className="txtResponsavel" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Responsável</Form.Label>
//                                     <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={4}>
//                                 <div className="txtTelefoneResp" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>Telefone Responsável</Form.Label>
//                                     <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                             <Col sm={2}>
//                                 <div className="comboWhatsApp" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>WhatsApp</Form.Label>
//                                     <Form.Control as="select" defaultValue="Selecione...">
//                                         <option>Sim</option>
//                                         <option>Não</option>
//                                     </Form.Control>
//                                 </div>
//                             </Col>
//                             <Col sm={2}>
//                                 <div className="txtFAP" >
//                                     <Form.Label className="text-left" style={{ width: "100%" }}>FAP</Form.Label>
//                                     <Form.Control                                         
//                                     //value={this.state.nome}
//                                     //onChange={e=>this.setNome(e.target.value)}
//                                     />                                        
//                                 </div>
//                             </Col>
//                         </Form.Row>
//                         <br></br>
//                         <br></br>
//                         <br></br>
//                     </Form> 
//                 </div>
//                 {/* <div className="tabelaEmpresa" style={{marginTop: '10px'},{marginLeft:'70px'}}>
//                     <TabelaEmpresa data={this.state.data} selecionar={this.selecionarEmpresa}/>
//                 </div> */}
//             </div>
//         )
//     }
// }
// export default Empresas
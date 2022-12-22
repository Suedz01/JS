function inicia(){
    //ploting datatime on your page
    let data = new Date();
    alert('Hoje é dia: '+ data); //interaction without the use of console
    console.log("Part 01 - Check");
}

const funcao_carrega_tabela = () =>{
    let espaco_tabela = document.getElementById('espaco_tabela');
    let tabela = document.createElement('table');
    tabela.border = '1';
    let tabela_body = document.createElement('tbody');
    tabela.appendChild(tabela_body);

    for(let i=0; i<3; i++)
    {
        let tr = document.createElement('tr'); // tr's are lines
        tabela_body.appendChild(tr);

        for(let j=0; j<3; j++)
        {
            //CreateElements and AppendChilds are close statements
            let td = document.createElement('td'); // td's are collumns
            tr.appendChild(td); //Necessary if u want the line to load the infos of the collumns 
            td.appendChild(document.createTextNode("Cell "+ i + "," + j));
        }
    }
    espaco_tabela.appendChild(tabela);
}



/* 
//Part 01: Using Alerts
console.log('Maravilha');
//ploting datatime on your page
let data = new Date();
alert('Hoje é dia: '+ data); //interaction without the use of console
console.log("Part 01 - Check");
*/

//main commands of DOM Elements
//getElementById
//documentElement
//getElementByTagName     -and etc

/* 
//Part 02: Creating Texts
const paragrafo = document.createElement('p');
paragrafo.innerText = 'Elemento foi criado com sucesso';
document.body.appendChild(paragrafo);
console.log("Part 02 - Check");
*/

/*
//Part 03: Creating Divs
let espaco_cabecalho = document.getElementById('espaco_cabecalho');
const cab_1 = document.createElement('h1');
cab_1.innerText = 'Palmeiras campeão!!';
espaco_cabecalho.appendChild(cab_1); //Manipulating the variable of the Div
console.log("Part 03 - Check");
*/
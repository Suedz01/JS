import logo from './logo.svg';
import './App.css';

function App() {

  //npm init react-app nome_arquivo
  //npm start

  const numero = 15;
  function myFunction(){
    var x = document.getElementById("myDIV");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div className = "div_principal">
    <button onClick = {myFunction()} >Try it</button>
      <div id="myDIV">
        This is my DIV element. 
      </div>
    </div>
  );
}export default App;
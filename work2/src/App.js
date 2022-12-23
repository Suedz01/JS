import './App.css';

function App() {

  function toggle(divSET) {
    var className = document.getElementsByClassName(divSET);

    Array.from(className).forEach((e) => {
      if (e.style.display === "none") {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    })
    console.log(divSET)
  }

  return (
    <div className = "App">
      <button className='butSET1' onClick={toggle('divSET1')}>
        Botão 01</button>
        <p className ='divSET1'>
        This is my DIV element.
        </p>
      <button className='butSET2'onClick={toggle('divSET2')}>
        Botão 02</button>
        <p className ='divSET2'>
        This is my DIV element.
        </p>
      <button className='butSET3' onClick={toggle('divSET3')}>
        Botão 03</button>
        <p className ='divSET3'>
        This is my DIV element.
        </p>
      <button className='butSET4'onClick={toggle('divSET4')}>
        Botão 04</button>
        <p className ='divSET4'>
        This is my DIV element.
        </p>
      <button className='butSET5'onClick={toggle('divSET5')}>
        Botão 05</button>
        <p className ='divSET5'>
        This is my DIV element.
        </p>
    </div>
  );
}
export default App;

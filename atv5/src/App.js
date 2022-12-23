import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(`Estou dentro do componente e montando. O valor atual é ${count}`)

    return () => {
      console.log(`O valor do contador era ${count}. Vou destruí-lo!!!`)
    }
  }, [])

  useEffect(() => {
    console.log(`Agora, monitoro a variável.... O valor atual é ${count}`)
  }, [count])


  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{ count }</h1>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Show / Esconde o componente Counter
      </button>

      { visible && <Counter /> }
    </div>
  )
}
export default App;
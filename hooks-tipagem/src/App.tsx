import { useState, useEffect } from 'react';
import './App.css';

type PropsGlobal = {
  size?: number;
  cor?: string;
  font?: string;
};

function App({ size = 28, cor = 'white', font = 'Arial, Helvetica, sans-serif' }: PropsGlobal) {
  const [count, setCount] = useState<number>(0);

  useEffect((): void => {
    console.log("Tipando Hook useEffect!");
  }, [count]);

  return (
    <div className='container'>
      <button onClick={() => setCount((prevCount) => prevCount + 1)} title='Clique no botão'>{count}</button>

      <h1 style={{ fontSize: size, color: cor, fontFamily: font}}>Tipando Hooks</h1>
    </div>
  );
}

export default App;


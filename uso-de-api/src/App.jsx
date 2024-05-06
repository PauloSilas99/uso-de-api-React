import React from 'react'
import './App.css'
import Produto from './Produtos'

function App() {
  const [dados,setDados] = React.useState(null);
  const[carregando,setCarregando] = React.useState(null);

  async function handleClick(event){
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button className='espaco' onClick={handleClick}>Notebook</button>
      <button className='espaco' onClick={handleClick}>Smartphone</button>
      <button className='espaco' onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  )
}

export default App

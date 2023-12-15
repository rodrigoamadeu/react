import {useState} from 'react'; 
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api.js';


function App() {

  const [input, setInput] = useState('')
// quando chamamos input(o nome do estado), setInput vai passar um valor novo para esse estado  
  const [cep, setCep] = useState({});


  async function handleSearch() {
    
    if(input === ''){
      alert("Preencha com um CEP.")
      return;
    } 

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
      
    }catch{
      alert('Ops erro ao buscar')
      setInput("")// volta o valor do useState para vazio
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
      <input 
        type="text" 
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#fff"/>
      </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf} </span>
        </main>
      )}
      
    </div>
  );
}

export default App;
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
function App() {
  
  return (

    <div className="App">
     
      <HelloWorld/>
      <Evento nome1="José" nome2="Maria"/>
      <Frase/>
      <SayMyName nome="Francisco"/>
      <Pessoa 
      nome="Francisco" 
      foto='https://via.placeholder.com/150' 
      idade="18" 
      profissao="Programador" />
      <List />
      
    </div>
   
  );
}

export default App;

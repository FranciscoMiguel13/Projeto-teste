import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  
  return (

    <div className="App">
     
      <HelloWorld/>
      <Frase/>
      <SayMyName nome="Francisco"/>
      <Pessoa 
      nome="Francisco" 
      foto='https://via.placeholder.com/150' 
      idade="18" 
      profissao="Programador" />

    </div>
   
  );
}

export default App;

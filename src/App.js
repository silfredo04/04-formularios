import logo from './logo.svg';
import './App.css';
import {FormulariosComponents} from './Components/FormulariosComponents';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormulariosComponents/>
      </header>
    </div>
  );
}

export default App;

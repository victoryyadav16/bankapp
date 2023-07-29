import logo from './Assets/Images/rlogo.png';
import './App.css';
import BasicCard from './components/Card';
import UseStateFrom from './components/useInputState/Usestateform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BasicCard/>
      <UseStateFrom/>
    </div>
  );
}

export default App;

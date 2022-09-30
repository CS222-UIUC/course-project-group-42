import logo from './logo.svg';
import employee from './data.json'
import LocalFileRead from './Data.tsx';
import Canvas from './Canvas.tsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Canvas></Canvas>
        <p>
          Edit <code>src/App.js</code> and <a href = "https://www.youtube.com/">save to reload</a>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

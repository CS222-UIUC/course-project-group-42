import logo from './logo.svg';
import employee from './data.json'
import Assignment from './components/Assignment.tsx'
import Canvas from './Canvas.tsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas></Canvas>
        <Assignment></Assignment>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

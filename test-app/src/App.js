import logo from './logo.svg';
import employee from './data.json'
import { Assignment } from './components/Assignment.tsx'
import Canvas from './Canvas.tsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Assignment name="CS 225" assignment = "MP Lists" time = "11:59" type="MP"></Assignment>
        <Assignment name="RST 230" assignment = "Quiz 11" time = "10:00" type="Quiz"></Assignment>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import employee from './data.json'
import { Assignment } from './components/Assignment.tsx'
import {AddCourse} from './components/AddCourse.tsx'
import {AddKeywords} from './components/AddKeywords.tsx'
import Canvas from './Canvas.tsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class = "top" style={{backgroundColor: 'lightblue', width: '1000px', height: '150px', borderRadius: '15px', }}>
          <AddCourse></AddCourse>
          <AddKeywords></AddKeywords>
        </div>
        <Assignment name="CS 225" assignment = "MP Lists" time = "11:59" type="MP"></Assignment>
        <Assignment name="RST 230" assignment = "Quiz 11" time = "10:00" type="Quiz"></Assignment>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

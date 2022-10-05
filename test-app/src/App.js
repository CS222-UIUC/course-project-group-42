import logo from './logo.svg';
import employee from './data.json'
import { Assignment } from './components/Assignment.tsx'
import {AddCourse} from './components/AddCourse.tsx'
import {AddKeywords} from './components/AddKeywords.tsx'
import { DateBox } from './components/DateBox.tsx'
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
        <div>
          <DateBox date = "October 5th, 2022"></DateBox>
            <Assignment name="CS 225" assignment = "MP Lists" time = "11:59 PM" type="MP"></Assignment>
            <Assignment name="RST 230" assignment = "Quiz 11" time = "10:00 PM" type="Quiz"></Assignment>
          <DateBox date = "October 6th, 2022"></DateBox>
            <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
          <DateBox date = "October 7th, 2022"></DateBox>
            <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment>
        </div> 

      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

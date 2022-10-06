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
      {/* <header className="App-header">
      </header> */}
     <div style={{backgroundColor: "red", position: "fixed", top: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <AddCourse/>
          <AddKeywords/>
      </div>
      <div style={{backgroundColor: "blue", marginTop:"100px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "50px"}}>
       <DateBox date = "October 5th, 2022"></DateBox>
       <Assignment name="CS 225" assignment = "MP Lists" time = "11:59 PM" type="MP"></Assignment>
       <Assignment name="RST 230" assignment = "Quiz 11" time = "10:00 PM" type="Quiz"></Assignment>
     <DateBox date = "October 6th, 2022"></DateBox>
       <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
     <DateBox date = "October 7th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment>
     <DateBox date = "October 6th, 2022"></DateBox>
       <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
     <DateBox date = "October 7th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment> 
       <DateBox date = "October 7th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment>
       <DateBox date = "October 6th, 2022"></DateBox>
       <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
     <DateBox date = "October 7th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment> 
       <DateBox date = "October 7th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment>
    </div>
    
    
    </div>
    // add a Todo list component
    // add menu component
    // onClick component to make <P> text in assignment strikethrough 
  );
}

export default App;

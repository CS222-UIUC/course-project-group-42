import { Assignment } from './components/Assignment.js'
import {AddCourse} from './components/AddCourse.tsx'
import {AddKeywords} from './components/AddKeywords.tsx'
import { DateBox } from './components/DateBox.tsx'
import { AssignmentList } from './components/AssignmentList.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
     <div style={{backgroundColor: "lightBlue", position: "fixed", top: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <AddCourse/>
          <AddKeywords/>
      </div>
      <div style={{marginTop:"100px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "50px"}}>
        <AssignmentList></AssignmentList>
       {/* <DateBox date = "October 5th, 2022"></DateBox>
       
       <Assignment name="RST 230" assignment = "Quiz 11" time = "10:00 PM" type="Quiz"></Assignment>
       <DateBox date = "October 6th, 2022"></DateBox>
       <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
       <DateBox date = "October 7th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment>
       <DateBox date = "October 6th, 2022"></DateBox>
       <Assignment name="CS 233" assignment = "Midterm" time = "8:00 AM" type="Exam"></Assignment>
       <DateBox date = "October 8th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment> 
       <DateBox date = "October 9th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment>
       <DateBox date = "October 10th, 2022"></DateBox>
       <DateBox date = "October 11th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment> 
       <DateBox date = "October 12th, 2022"></DateBox>
       <Assignment name="STAT 400" assignment = "Problem Set" time = "11:59 PM" type="HW"></Assignment> */}
    </div>
    
    
    </div>

    // add a ToDo list component
    // add NavBar component
    // When user clicks add course 
    // onClick component to make <P> text in assignment strikethrough 

    // parse a JSON Locally
    // try to host a MongoDB non-relational database
    // understand how server protocols work (look into it)
  );
}

export default App;

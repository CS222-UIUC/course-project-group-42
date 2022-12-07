import {AddCourse} from './components/AddCourse.tsx'
import {AddKeywords} from './components/AddKeywords.tsx'
import { AssignmentList } from './components/AssignmentList.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Popup } from '/Users/rohan_v/Desktop/CS222/course-project-group-42/test-app/src/components/Popup.tsx'
import { useState } from 'react'
import './App.css';

function App() {
  const [showJson, setShowJson] = useState(null);
  return (
    <div className="App">
     <div style={{backgroundColor: "#296bd6", position: "fixed", top: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height:"140px"}}>
          <h1 style={{color: "white", fontFamily: "Verdana", marginTop: "10px"}}>Canvas TODO List</h1>
          <AddCourse setShowJson = {setShowJson}/>
          {/* <AddKeywords/> */}
          {/* <button onClick = {() => setButtonPopup(true)}>popup</button> */}
      </div>
      <div style={{marginTop:"100px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "50px"}}>
        <AssignmentList showJson={showJson}></AssignmentList>
    </div>
    {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}
    
    </div>
  );
}

export default App;

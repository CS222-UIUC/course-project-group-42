import {AddCourse} from './components/AddCourse.tsx'
import { AssignmentList } from './components/AssignmentList.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css';

function App() {
  const [showJson, setShowJson] = useState(null);
  return (
    <div className="App">
     <div style={{backgroundColor: "#296bd6", position: "fixed", top: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height:"140px"}}>
          <h1 style={{color: "white", fontFamily: "Verdana", marginTop: "10px"}}>Canvas TODO List</h1>
          <AddCourse setShowJson = {setShowJson}/>
      </div>
      <div style={{marginTop:"100px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "50px"}}>
        <AssignmentList showJson={showJson}></AssignmentList>
    </div>
    
    </div>
  );
}

export default App;

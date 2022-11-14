import React from 'react';
import json from "/Users/rohan_v/Desktop/CS222/course-project-group-42/test-app/src/components/test/test.json"

const DateBox = ({date}) => (
    <div style={{backgroundColor: "lightgrey", marginBottom: '20px', marginLeft: '-15px', height: "40px", width: "1100px", borderRadius: '15px'}}>
        <p style ={{marginTop: "7px", marginLeft: '15px', color: 'black', marginBottom: "0"}}><b>Date: {date}</b></p>
    </div>
);


const Assignment = ({ name, assignment, time, type, shift }) => (
    <div style={{marginRight: shift, backgroundColor: '#296bd6', width: '1000px', height: '50px', borderRadius: '15px', marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"}}>
        <p style={{fontFamily: "Courier New", color: "white", marginTop: "0", marginBottom: "0"}}>{assignment}</p>
        <p style={{fontFamily: "Courier New",color: "white",marginTop: "0", marginBottom: "0"}}>{name}</p>
        <p style={{fontFamily: "Courier New",color: "white",marginTop: "0", marginBottom: "0"}}>Due: {time}</p>
        <p style={{fontFamily: "Courier New",color: "white",marginTop: "0", marginBottom: "0"}}> Type: {type }</p>
        <input type ="checkbox"></input>
    </div>
);


function AssignmentList() {
    const obj = JSON.parse(JSON.stringify(json));
    let currDate = obj["Assignments"][0].Date;
    console.log(currDate);
    
   return (
   
    <>
    {obj["Assignments"].map((data,id)=>{
        console.log(data);
        console.log(id);
        if (id === 0) {
            return <div key={id}>
            <DateBox date = {currDate}></DateBox>
            <Assignment name={data.Name} assignment = {data.Assignment} time = {data.Due} type={data.Type} shift="0px"></Assignment>
        </div>
        }
        
        if (currDate !== data.Date) {
            currDate = data.Date;
            return <div key={id}>
            <DateBox date = {currDate}></DateBox>
            <div><Assignment name={data.Name} assignment = {data.Assignment} time = {data.Due} type={data.Type} shift="0px"></Assignment></div>
        </div>
        }
        else {
            return <div key={id}>
            <Assignment name={data.Name} assignment = {data.Assignment} time = {data.Due} type={data.Type} shift="80px"></Assignment>
        </div>
        }
      
    })}

    </>);
}

export { AssignmentList }; 
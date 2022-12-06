import React from 'react';
import json from "/Users/rohan_v/Desktop/CS222/course-project-group-42/test-app/src/components/test/test.json"

const DateBox = ({ date }) => (
    <div style={{ backgroundColor: "lightgrey", marginBottom: '20px', marginLeft: '-15px', height: "40px", width: "1100px", borderRadius: '15px' }}>
        <p style={{ marginTop: "7px", marginLeft: '15px', color: 'black', marginBottom: "0" }}><b>Date: {date}</b></p>
    </div>
);

const Assignment = ({ name, assignment, time, type, shift }) => (
    <div style={{marginRight: shift, backgroundColor: '#296bd6', width: '1050px', height: '50px', borderRadius: '15px', marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"}}>
        <p style={{fontFamily: "Verdana", color: "white", marginTop: "0", marginBottom: "0"}}>{assignment}</p>
        <p style={{fontFamily: "Verdana",color: "white",marginTop: "0", marginBottom: "0"}}>{name}</p>
        <p style={{fontFamily: "Verdana",color: "white",marginTop: "0", marginBottom: "0"}}>Due: {time}</p>
        {/* <p style={{fontFamily: "Verdana",color: "white",marginTop: "0", marginBottom: "0"}}> Type: {type }</p> */}
        <input type ="checkbox"></input>
    </div>
);



function AssignmentList(props) {
    const {showJson} = props
    // const obj = JSON.parse(JSON.stringify(json));
    // console.log(showJson)
    // console.log(obj)
    // console.log(showJson);
    console.log(showJson)
    
    if (showJson == null) {
        console.log("here")
        return <div style={{textAlign: "center", marginTop: '50px'}}>
                    <p>No Assignments to Display.</p> 
                    <p>To link your Canvas account, generate an API token <a href="https://canvas.illinois.edu/profile/settings">here</a></p>
                
                </div>
    }
    console.log(showJson.length)
    let currDate = showJson["Assignments"][0].Date;
    // console.log(currDate);
    
    return (
        <>
            
            {showJson["Assignments"].map((data, id) => {
                // console.log(data);
                // console.log(id);
                if (data.Date !== "-1") {
                    const course = data.Name.split("-")[1];
                    // console.log(course)
                    if (id === 0) {
                        return <div key={id}>
                            <DateBox date={currDate}></DateBox>
                            <Assignment name={course} assignment={data.Assignment} time={data.Due} type={data.Type} shift="0px"></Assignment>
                        </div>
                    }

                    if (currDate !== data.Date) {
                        currDate = data.Date;
                        return <div key={id}>
                            <DateBox date={currDate}></DateBox>
                            <div><Assignment name={course} assignment={data.Assignment} time={data.Due} type={data.Type} shift="0px"></Assignment></div>
                        </div>
                    }
                    else {
                        return <div key={id}>
                            <Assignment name={course} assignment={data.Assignment} time={data.Due} type={data.Type} shift="35px"></Assignment>
                        </div>
                    }
                } else {
                    // console.log(data.Date)
                    return "";
                }

            })}

        </>);
}

export { AssignmentList }; 
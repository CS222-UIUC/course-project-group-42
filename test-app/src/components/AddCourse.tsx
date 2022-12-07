import React, { useRef, useState } from 'react';


function AddCourse(props) {
    const [fetchJson, setFetchJson] = useState();
    const {setShowJson} = props;

    function handleChange(event) {
        setFetchJson(event.target.value);
    }

    function fetchData() {
        console.log("pressed: ", fetchJson);
        fetch('http://127.0.0.1:5000/upload_data/' + fetchJson)
            .then((response) => response.json())
            .then((data) => setShowJson(data));
    }


    return (
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "row", borderColor: 'red'}}>
            <input onChange={handleChange} type = "text" id = "message" name = "message" style={{ backgroundColor: 'lightgrey', width: '550px', height: '40px', borderRadius: '15px' }}  placeholder="Input API Token"></input>
            <button onClick={fetchData} style={{ backgroundColor:"white", marginLeft: "20px"}}>Add Course</button>
        </div>
    );
}

export { AddCourse };
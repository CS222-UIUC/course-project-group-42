import React, { useRef, useState } from 'react';


function AddCourse(props) {
    // const [message, setMessage] = useState('');
    const inputRef = useRef(null);
    const [input, setInput] = useState('');
    const [fetchJson, setFetchJson] = useState();
    const {setShowJson} = props
    function handleChange(event) {
        setFetchJson(event.target.value);
        // fetch('http://127.0.0.1:5000/upload_data/' + inputRef)
        //     .then((response) => response.json())
        //     .then((data) => setShowJson(data));
    }

    function fetchData() {
        console.log("pressed: ", fetchJson);
        fetch('http://127.0.0.1:5000/upload_data/' + fetchJson)
            .then((response) => response.json())
            .then((data) => setShowJson(data));

    }


    return (
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "row", borderColor: 'red'}}>
            <input onChange={handleChange} type = "text" id = "message" name = "message" style={{ backgroundColor: 'orange', width: '550px', height: '40px', borderRadius: '15px' }}  placeholder="Input API Token"></input>
            <button onClick={fetchData}>Add Course</button>
            {/* <button onChange={() => setButtonPopup(true)}>Add Course</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}
        </div>
    );
}

export { AddCourse };
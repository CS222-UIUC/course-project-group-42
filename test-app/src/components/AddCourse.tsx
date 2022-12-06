import React, { useRef, useState } from 'react';
// import {writeJsonFile} from 'write-json-file';


function AddCourse() {
    // const [message, setMessage] = useState('');
    const inputRef = useRef(null);
    function handleClick() {
        // await writeJsonFile('/Users/rachel/Documents/CS222/course-project-group-42/test-app/src/components/token_stored.json', {token_stored: true});
        // writeJsonFile('/Users/rachel/Documents/CS222/course-project-group-42/test-app/src/components/token_stored.json', inputRef.current.value)
        console.log(inputRef.current.value);
    }
    // const handleChange = event => {
    //     setMessage(event.target.value);
    //     console.log('value is:', event.target.value)
    // }

    return (
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "row", borderColor: 'red'}}>
            <input ref={inputRef} type = "text" id = "message" name = "message" style={{ backgroundColor: 'orange', width: '550px', height: '40px', borderRadius: '15px' }}  placeholder="Input API Token"></input>
            <button  onClick={handleClick}>Add Course</button>
            {/* <button onChange={() => setButtonPopup(true)}>Add Course</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}
        </div>
    );
}

// function GetInput() {
//     const variable = document.getElementById('input_id');
//     console.log(variable);
// }

export { AddCourse };
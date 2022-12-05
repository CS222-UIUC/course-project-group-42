import React, { useState } from 'react';

// const Popup = ({ props }) => {
//     return ((props.trigger) ? (
//         <div style={{ position: 'fixed', top: "0px", left: '0px', width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.2)" }}>
//             <div style={{ position: "relative", padding: "32px", width: "100%", maxWidth: "640px", backgroundColor: "#FFF" }}>
//                 <button style={{ position: "absolute", top: "16px", right: "16px" }} onClick={() => props.setTrigger(false)}>Close</button>
//                 {props.children}
//             </div>
//         </div>
//     ) : <div></div>)
// };

function AddCourse() {
    const [buttonPopup, setButtonPopup] = useState();
    return (
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "row", borderColor: 'red'}}>
            <input style={{ backgroundColor: 'orange', width: '550px', height: '40px', borderRadius: '15px' }} type="text" placeholder="Link to Course Website.."></input>
            <input style={{ backgroundColor: 'orange', width: '250px', height: '40px', borderRadius: '15px', marginBottom: "20px" }} type="text" placeholder="Course Name.."></input>
            <button>Add Course</button>
            {/* <button onChange={() => setButtonPopup(true)}>Add Course</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}
        </div>
    );
}

export { AddCourse };
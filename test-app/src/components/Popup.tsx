import React from 'react';

function Popup(props) {
    return ((props.trigger) ? (
        <div style={{ position: 'fixed', top: "0px", left: '0px', width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.2)" }}>
            <div style={{position: "relative", padding:"32px", width:"100%", maxWidth: "640px", backgroundColor:"#FFF"}}>
                <button style={{position: "absolute", top: "16px", right: "16px"}} onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "")


}

export { Popup };
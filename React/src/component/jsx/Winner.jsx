import React from "react";
import "./../style/Modal.css";

const Winner = (props) => {

    return (
        <div className="modal_window">
            <div className="modal_content">
                <div className="winner">
                    <h1>{props.winner}</h1>
                </div>
                
            </div>
        </div>
    );
}

export default Winner;
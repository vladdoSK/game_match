import React from "react";
import "./../style/Modal.css";

const Winner = (props) => {

    return (
        <div ref={props.modalRef} className="modal_window">
            <div className="modal_content">
                <div className="winner">
                    <h1>{props.winner}</h1>
                </div>
                <button className="button" onClick={props.new_game}>Play again</button>              
            </div>
        </div>
    );
}

export default Winner;
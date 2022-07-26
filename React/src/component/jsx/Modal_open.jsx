import React from "react";
import './../style/Modal.css';

const Modal_open = (props) => {

    function window_close()
    {
        props.setIsStartGame(false);
    }


    return (
        <div className={props.isStartGame ? "modal_open" : "modal_open active"}>
            <div className="modal_content">
                <h1>Welcome to our game</h1>
                <div className="block_button">
                    <button className="button button--small_btn" 
                    onClick={window_close}>Start game</button>
                </div>
            </div>
        </div>
    );
}

export default Modal_open;
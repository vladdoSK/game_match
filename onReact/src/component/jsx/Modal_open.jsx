import React from "react";
import './../style/Modal.css';

const Modal_open = (props) => {

    function window_close()
    {
        const modal = document.querySelector('.modal_open');
        modal.classList.add('active');
    }


    return (
        <div className="modal_open">
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
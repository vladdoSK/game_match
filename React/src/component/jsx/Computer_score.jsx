import React from "react";

const Computer_score = (props) => {

    return (
        <div className="computer">
            <div ref={props.ai_move} className="computer_back"></div>
            <h1>Computer</h1>
            <h2 className="score_computer">Score: {props.c_score}</h2>
        </div>
    );
}

export default Computer_score;
import React from "react";

const Player_score = (props) => {

    return (
        <div className="player">
                <div ref={props.player_move} className="player_back active"></div>
                <h1>You</h1>
                <h2 className="score_player">Score: {props.p_score}</h2>
                <p className="left_move">Left move: {props.left_move}</p>
                <p ref={props.warning} className="warning">You must make a move at least 1 time</p>
        </div>
    );
}

export default Player_score;
import React from "react";
import "./../style/Match.css";
import Match from "./Match";
import "./../style/Table_score.css"
import Player_score from "./Player_score";
import Computer_score from "./Computer_score";



const Field_table_block = (props) => {


    function disappear(e, index) {
        if ((props.left_move) !== 0) {

            props.warning.current.classList.remove('active');
            props.setLeft_move(props.left_move - 1);
            props.setMatch_num([...props.num_matches.slice(0, index), ...props.num_matches.slice(index + 1)]);

            props.setPlayer_score(props.p_score + 1);
            props.isEndGame(1, 1);
        }
    }

    return (
        <div className="container">

            <Computer_score c_score={props.c_score}
                ai_move={props.ai_move} />

            <div ref={props.matches} className="matches_block">
                {props.num_matches.map((m, index) =>
                    (<Match disappear={disappear} matches={props.matches} key={m} index={index} />)
                )}
            </div>

            <Player_score p_score={props.p_score}
                left_move={props.left_move}
                warning={props.warning}
                player_move={props.player_move} />

        </div>
    );
}

export default Field_table_block;
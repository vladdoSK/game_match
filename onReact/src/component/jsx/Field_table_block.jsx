import React from "react";
import "./../style/Match.css";
import Match from "./Match";
import "./../style/Table_score.css"
import Player_score from "./Player_score";
import Computer_score from "./Computer_score";
import { state } from "../../state/app";



const Field_table_block = (props) => {

    function match() {
        return (state.match.map(m => <Match
            disappear={props.disappear} />))
    }

    return (
        <div className="container">

            <Computer_score c_score={props.c_score} />

            <div className="matches_block">
                {match()}
            </div>

            <Player_score p_score={props.p_score} left_move={props.left_move}/>

        </div>
    );
}

export default Field_table_block;
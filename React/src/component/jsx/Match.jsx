import React from "react";
import "./../style/Match.css";

const Match = (props) => {

    return (
        <div className="block">
            <div className="match" onClick={e => props.disappear(e)}>
                    <div className="head_match"></div>
                    <div className="body_math"></div>
                </div>
        </div>
    );
}

export default Match;
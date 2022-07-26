import React from "react";
import "./../style/Match.css";

const Match = (props) => {

    return (

        <div className="match" onClick={e => props.disappear(e, props.index)}>
            <div className="body_math"></div>
        </div>

    );
}

export default Match;
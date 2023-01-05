import React from "react";
import CorrectAns from "./CorrectAns"
import IncorrectAns from "./IncorrectAns"


const ScoreArea = (props) => {
    return(
        <div className="score_area">
            <h2>Score Area</h2>
            <CorrectAns correct={props.correct}/>
            <IncorrectAns incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea
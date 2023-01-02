import React from "react";
import CorrectAns from "./CorrectAns"
import IncorrectAns from "./IncorrectAns"


const ScoreArea = () => {
    return(
        <div>
            <h2>Score Area</h2>
            <CorrectAns />
            <IncorrectAns />
        </div>
    )
}

export default ScoreArea
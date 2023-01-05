import React from "react";

const Question = (props) => {
    return(
        <div>
        <h1 className="question">{props.dataSet.question}</h1>
        </div>
    )
}

export default Question
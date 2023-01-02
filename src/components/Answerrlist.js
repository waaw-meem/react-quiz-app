import React from "react";
import Answers from "./Answers";

const Answerlist = (props) => {

    const options = [];
    for(let i=0; i < props.dataSet.options.length; i++){
        options.push(<Answers choice={i} answer={props.dataSet.options[i]}/>)
    }

    return(
        <div>{options}</div>
    )
}

export default Answerlist
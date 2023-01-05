import React from "react";

const Answers = (props) => {
    return(
        <div className="answer_container">
            <button className="ans_btn" type="button" onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

export default Answers
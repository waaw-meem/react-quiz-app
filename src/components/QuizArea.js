import React from "react";
import Question from "./Question"
import Answerlist from "./Answerrlist"
import UserGreet from "./UserGreet"


const QuizArea = (props) => {
    if(props.isFinished){
        return <UserGreet/>
    }

    return(
        <div>
         <Question dataSet={props.dataSet}/>
         <Answerlist handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea
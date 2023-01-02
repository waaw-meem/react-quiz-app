import React from "react";
import Question from "./Question"
import Answerlist from "./Answerrlist"
import UserGreet from "./UserGreet"


const QuizArea = (props) => {
    if(props.isFinished){
        return <UserGreet/>
    }

    return(
        <div>Quiz Area
         <Question dataSet={props.dataSet}/>
         <Answerlist dataSet={props.dataSet}/>


        </div>
    )
}

export default QuizArea
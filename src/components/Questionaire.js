import React from "react";
import dataSet from "../api/dataSet";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";



class Questionaire extends React.Component {
    constructor(){
        super();

        this.state = {
            current:0,
            dataSet: dataSet,
            correct:0,
            incoorect:0,
            isFinished: false,
        }
    }

    
    render(){
        return(
            <div>This is Questionaire
                <QuizArea  isFinished={this.state.isFinished} 
                dataSet={this.state.dataSet[this.state.current]}/>
                <ScoreArea />
            </div>
        )
    }
}

export default Questionaire
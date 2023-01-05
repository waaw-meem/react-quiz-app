import React from 'react';
import Questionaire from './Questionaire';
// import Question from "./Question";
// import CorrectAns from './CorrectAns';
// import IncorrectAns from './IncorrectAns';
// import QuizArea from './QuizArea';
// import ScoreArea from './ScoreArea';
// import UserGreet from "./UserGreet";
import "./App.css"

const App = () => {
    return(
        <div>
            <h1 className='app_head'>Javascript Quiz</h1>
            <Questionaire />
        </div>
    )
}

export default App
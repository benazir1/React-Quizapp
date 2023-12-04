import { useState } from 'react'
import questions from './Questions'
import './App.css'

function App() {
  const [questionIndx,setQuestionIndx]=useState(0);
  const [score, setScore] = useState(0);
  const [scoreShow, setScoreShow] = useState(false);
  const currentquestion=questions[questionIndx];

  const selectOption=(indx)=>{
    if(currentquestion.answer === indx){
     setScore(score+1)
    }
    const nextQues = questionIndx + 1;
 if (nextQues < questions.length) {
   setQuestionIndx(questionIndx + 1);
 }
 else{
   setScoreShow(true);
 }
 };
 const reset = () => {
    
  setQuestionIndx(0);
  setScoreShow(false);
  setScore(0);
};
  return (
    <div className='quiz-container'>
    {scoreShow ? (
      <>
     
      <h1>your score is{score}</h1>
      <button onClick={reset}>Restart Quiz</button>
     
      </>
    ): (  
    <div className="quiz-container_question">
      <p>{currentquestion.question}</p>
      <div className="quiz-container-options">
        <ul className='quiz-container_ul'>
          {currentquestion.options.map((option,i)=>{
            return <li className='quiz-container_li' key={i} onClick={()=>selectOption(i)}>{option} </li> 
          })}
            
                 </ul>
      </div>
    </div>)}
   
   </div>
  
  
  )
}

export default App

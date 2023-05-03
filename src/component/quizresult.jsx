


function QuizResult(prop) {
  return (
    <>
    <div className='show-score'>
        Your Score:{prop.score}<br/>
        Total Score:{prop.totalScore}
    </div>
    <button id="next-button" onClick={prop.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
import useQuizStore from "../store/useQuizeStore";

const Question = () => {

    const {
        questions,
        currentQuestion,
        selectAnswer,
        answers,
        nextQuestion,
        prevQuestion,
        showScore,
        score,
        resetQuiz,
      } = useQuizStore();

      if(showScore){
        return(
            <div className="w-full p-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Quiz Complete! 🎉
                </h2>
                <p className="text-2xl text-gray-600 mb-8">
                    You scored <span className="font-bold text-indigo-600">{score}</span> out of <span className="font-bold">{questions.length}</span>
                </p>
                <button
                    className="px-8 py-3 bg-indigo-600 text-white text-lg
                    rounded-xl hover:bg-indigo-700 transition-colors duration-300
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={resetQuiz}
                >
                    Try Again
                </button>
            </div>
        )
      }

      const question = questions[currentQuestion];
      const currentAnswer = answers[currentQuestion];

      const handleSelect = (optionIndex: any) => {
            selectAnswer(optionIndex);
      }

      const handleSubmit = () => {
        nextQuestion();
      }

      return(
        <div className="w-full p-8">
            <div className="mb-8">
                <span className="text-sm font-medium text-indigo-600 mb-2 block">
                    Question {currentQuestion + 1} of {questions.length}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                    {question.question}
                </h3>
            </div>

            <div className="space-y-3">
                {question.options.map((option, index) => (
                <div 
                    key={index} 
                    className={`transform transition-all duration-200 ${
                        currentAnswer === index 
                            ? 'scale-[1.02]' 
                            : 'hover:scale-[1.01]'
                    }`}
                >
                    <label className={`flex items-center p-4 rounded-xl cursor-pointer
                        border-2 transition-all duration-200 ${
                            currentAnswer === index
                                ? 'border-indigo-600 bg-indigo-50'
                                : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                        }`}>
                        <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            checked={currentAnswer === index}
                            onChange={() => handleSelect(index)}
                            className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className={`ml-4 text-lg ${
                            currentAnswer === index
                                ? 'text-indigo-600 font-medium'
                                : 'text-gray-700'
                        }`}>
                            {option}
                        </span>
                    </label>
                </div>
                ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
                {currentQuestion > 0 ? (
                    <button
                        onClick={prevQuestion}
                        className="px-6 py-3 bg-gray-100 text-gray-700
                        rounded-xl hover:bg-gray-200 transition-colors duration-200
                        font-medium"
                    >
                        Previous Question
                    </button>
                ) : <div></div>}
                
                {currentQuestion < questions.length - 1 ? (
                    <button
                        onClick={nextQuestion}
                        className="px-6 py-3 bg-indigo-600 text-white
                        rounded-xl hover:bg-indigo-700 transition-colors duration-200
                        font-medium shadow-lg hover:shadow-xl"
                    >
                        Next Question
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-green-600 text-white
                        rounded-xl hover:bg-green-700 transition-colors duration-200
                        font-medium shadow-lg hover:shadow-xl"
                    >
                        Complete Quiz
                    </button>
                )}
            </div>
        </div>
      )
}

export default Question;
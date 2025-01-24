import { FaCheckCircle } from "react-icons/fa";
import useQuizStore from "../store/useQuizeStore";

const Sidebar = () => {
  const { questions, currentQuestion } = useQuizStore();

  return (
    <div className="w-80 bg-white border-r border-gray-100 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Quiz Progress</h2>
      <ul className="space-y-4">
        {questions.map((_, index) => (
          <li 
            key={index} 
            className={`p-4 rounded-xl flex items-center transition-all duration-300 ${
              index === currentQuestion 
                ? 'bg-indigo-50 shadow-sm' 
                : 'hover:bg-gray-50'
            }`}
          >
            <FaCheckCircle
              className={`mr-3 text-xl transition-colors duration-300 ${
                index < currentQuestion 
                  ? "text-green-500" 
                  : index === currentQuestion 
                    ? "text-indigo-500"
                    : "text-gray-300"
              }`}
            />
            <span className={`font-medium ${
              index === currentQuestion 
                ? 'text-indigo-600' 
                : 'text-gray-600'
            }`}>
              Question {index + 1}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
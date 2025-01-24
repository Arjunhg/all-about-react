import Sidebar from "./Sidebar";
import Question from "./Question";

const QuizLayout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;
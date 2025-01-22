// basics
// import Common from "./Basics/Common"
// import OtherComponent from "./Basics/component/OtherComponent"

// const App = () => {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center">
//       <Common/>
//       <OtherComponent/>
//     </main>
//   )
// }

// export default App


// import { useState } from "react";
// import NotesApp from "./Projects/1.NotesApp/NotesApp";
// import Recipe from "./Projects/2.RecipeApp/Recipe";
// import ExpenseTracker from "./Projects/3.ExpenseTracker/ExpenseTracker";
// import FormBuilder from "./Projects/5.FormBuilder/components/FormBuilder";
// import Todo from "./Projects/6.TodoList/Todo";
// import Notes from "./Projects/7.Notes/components/Notes";
// import TaskList from "./Projects/8.TaskListApp/TaskList";
// import QuizLayout from "./Projects/9.QuizApp/components/QuizLayout";
// import Mega from "./Projects/10.WatchStore/Mega";
// import { render } from "react-dom";



// const App = () => {

//   const [activeTab, setActiveTab] = useState("notesapp");

//   const renderContent = () => {
//     switch(activeTab){
//       case "notesapp":
//         return <NotesApp/>
//       case "recipe":
//         return <Recipe/>
//       case "expense":
//         return <ExpenseTracker/>
//       case "formBuilder":
//         return <FormBuilder/>
//       case "todo":
//         return <Todo/>
//       case "notes":
//         return <Notes/>
//       case "taskList":
//         return <TaskList/>
//       case "quizLayout":
//         return <QuizLayout/>
//       case "mega":
//         return <Mega/>
//     }
//   }

//   return (
//     <div>
//       <div className="tabs">

//         <button className="border-2 p-4" onClick={() => setActiveTab("notesapp")}>NotesApp</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("recipe")}>Recipe</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("expense")}>Expense</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("formBuilder")}>Form Builder</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("todo")}>Todo</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("notes")}>Notes</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("taskList")}>Task List</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("quizLayout")}>Quiz Layout</button>

//         <button className="border-2 p-4" onClick={() => setActiveTab("mega")}>Mega</button>

//       </div>

//       <main>{renderContent()}</main>
//     </div>
//   )
// }

// export default App
//  or


import { useState } from "react";
import NotesApp from "./Projects/1.NotesApp/NotesApp";
import Recipe from "./Projects/2.RecipeApp/Recipe";
import ExpenseTracker from "./Projects/3.ExpenseTracker/ExpenseTracker";
import Meals from "./Projects/4.MealsProject/Meals";
import FormBuilder from "./Projects/5.FormBuilder/components/FormBuilder";
import Todo from "./Projects/6.TodoList/Todo";
import Notes from "./Projects/7.Notes/components/Notes";
import TaskList from "./Projects/8.TaskListApp/TaskList";
import QuizLayout from "./Projects/9.QuizApp/components/QuizLayout";
import Mega from "./Projects/10.WatchStore/Mega";

// Define projects configuration
const PROJECTS = [
  { id: "notesapp", label: "NotesApp", component: NotesApp },
  { id: "recipe", label: "Recipe", component: Recipe },
  { id: "expense", label: "Expense", component: ExpenseTracker },
  { id: "meals", label: "Meals", component: Meals },
  { id: "formBuilder", label: "Form Builder", component: FormBuilder },
  { id: "todo", label: "Todo", component: Todo },
  { id: "notes", label: "Notes", component: Notes },
  { id: "taskList", label: "Task List", component: TaskList },
  { id: "quizLayout", label: "Quiz Layout", component: QuizLayout },
  { id: "mega", label: "Mega", component: Mega }
];

const App = () => {
  const [activeTab, setActiveTab] = useState(PROJECTS[0].id);

  const ActiveComponent = PROJECTS.find(project => project.id === activeTab)?.component;


  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 bg-white shadow-md p-4 z-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {PROJECTS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === id
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main className="container mx-auto p-4">
        {/* {PROJECTS.find(project => project.id === activeTab)?.component()} //error */}
        {ActiveComponent && <ActiveComponent />}
      </main>
    </div>
  );
};

export default App;

import Sidebar from "./component/Sidebar";
import Modal from "./component/Modal";
import useTaskStore from "./store";
import { MdMoreVert } from "react-icons/md";
import MainArea from "./component/MainArea";

export default function TaskList(){

  const {
    todos,
    editIndex,
    editText,
    dropdownIndex,
    handleEdit,
    handleUpdate,
    handleDropdownClick,
    deleteTodo,
    setEditText,
    setEditIndex,
  } = useTaskStore();

  return(
    <div className="flex h-screen bg-gray-50">
      <Sidebar/>
      <div className="flex-1 p-8 overflow-y-auto">
        <MainArea/>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 ml-[2rem]">
            Todo List
          </h2>
          <ul className="space-y-4 pl-5">
          {
            todos.map((todo, index) => (
              <li key={index} className="ml-[2rem] bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                {
                  editIndex === index ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                      <button
                        onClick={() => handleUpdate(index)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="relative flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-800">
                          <strong>{todo.text}</strong>
                        </span>
                        <span className="text-sm text-gray-500">
                          List: {todo.list} • Workspace: {todo.workspace}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MdMoreVert
                          onClick={() => handleDropdownClick(index)}
                          size={24}
                          className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        />
                        {dropdownIndex === index && (
                          <div className="absolute right-0 top-8 bg-white border rounded-lg shadow-xl z-10">
                            <button
                              onClick={() => handleEdit(index)}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 w-full text-left rounded-t-lg"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => deleteTodo(index)}
                              className="block px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left rounded-b-lg"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                }
              </li>
            ))
          }
          </ul>
        </div>
      </div>
      <Modal/>
    </div>
  )
}
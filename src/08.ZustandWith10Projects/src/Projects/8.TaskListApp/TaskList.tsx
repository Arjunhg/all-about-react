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
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1 p-6">
        <MainArea/>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 ml-[2rem]">
            Todo List
          </h2>
          <ul className="list-disc pl-5">
          {
            todos.map((todo, index) => (
              <li key={index} className="mb-2 ml-[2rem]">
                {
                  editIndex === index ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg mr-2"
                      />
                      <button
                        onClick={() => handleUpdate(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="relative flex justify-between items-center">
                      <div>
                        <span className="mr-4">
                          <strong>{todo.text}</strong> (List: {todo.list},
                          Workspace: {todo.workspace})
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MdMoreVert
                          onClick={() => handleDropdownClick(index)}
                          size={24}
                          className="cursor-pointer"
                        />
                        {dropdownIndex === index && (
                          <div
                            className="absolute right-0 mt-2 bg-white
                          border rounded shadow-lg"
                          >
                            <button
                              onClick={() => handleEdit(index)}
                              className="block px-4 py-2 text-gray-700
                              hover:bg-gray-100 w-full text-left"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => deleteTodo(index)}
                              className="block px-4 py-2 text-gray-700
                              hover:bg-gray-100 w-full text-left"
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
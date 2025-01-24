import { FaPlus } from "react-icons/fa";
import useTaskStore from "../store";

const MainArea = () => {

    const {  
        lists,
        workspaces,
        selectedList,
        selectedWorkspace,
        todoText,
        setSelectedList,
        setSelectedWorkspace,
        setTodoText,
        handleAddTodo,
     } = useTaskStore();

     return (
        <div className="flex-1 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <input
                    type="text"
                    value={todoText}
                    className="w-full border border-gray-200 p-4 rounded-xl mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Add a new todo..."
                />
                <div className="flex items-center gap-4">
                    <select
                        value={selectedList}
                        onChange={(e) => setSelectedList(e.target.value)}
                        className="flex-1 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                        <option value="" disabled>Select List</option>
                        {lists.map((list, index) => (
                            <option value={list.name} key={index}>
                                {list.emoji} {list.name}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedWorkspace}
                        onChange={(e) => setSelectedWorkspace(e.target.value)}
                        className="flex-1 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                        <option value="" disabled>Select Workspace</option>
                        {workspaces.map((workspace, index) => (
                            <option value={workspace.name} key={index}>
                                {workspace.emoji} {workspace.name}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={handleAddTodo}
                        className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors duration-200"
                    >
                        <FaPlus /> Add Todo
                    </button>
                </div>
            </div>
        </div>
     )
}

export default MainArea;
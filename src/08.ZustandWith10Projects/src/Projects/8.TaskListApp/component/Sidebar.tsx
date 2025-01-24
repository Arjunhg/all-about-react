import { FaPlus } from "react-icons/fa";
import useTaskStore from "../store";

const Sidebar = () => {

    const { lists, workspaces, openListModal, openWorkspaceModal} = useTaskStore();

    return(
        <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Lists
                    </h3>
                    <ul className="space-y-2">
                        {lists.map((list, index) => (
                            <li
                                key={index}
                                className="p-3 hover:bg-gray-50 rounded-xl
                                cursor-pointer flex items-center group transition-all duration-200"
                            >
                                <span className="mr-3 text-xl">{list.emoji}</span>
                                <span className="text-gray-700 group-hover:text-gray-900">{list.name}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={openListModal}
                        className="mt-4 w-full flex items-center justify-center gap-2 p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    >
                        <FaPlus size={14}/> Add List
                    </button>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Workspaces
                    </h3>
                    <ul className="space-y-2">
                        {workspaces.map((workspace, index) => (
                            <li
                                key={index}
                                className="p-3 hover:bg-gray-50 rounded-xl
                                cursor-pointer flex items-center group transition-all duration-200"
                            >
                                <span className="mr-3 text-xl">{workspace.emoji}</span>
                                <span className="text-gray-700 group-hover:text-gray-900">{workspace.name}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={openWorkspaceModal}
                        className="mt-4 w-full flex items-center justify-center gap-2 p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    >
                        <FaPlus size={14}/> Add Workspace
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
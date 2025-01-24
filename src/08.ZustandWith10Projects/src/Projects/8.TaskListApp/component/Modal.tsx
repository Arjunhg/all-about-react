import { FaTimes } from "react-icons/fa";
import useTaskStore from "../store";

const Modal = () => {

    const {
        isListModalOpen,
        isWorkspaceModalOpen,
        modalName,
        modalEmoji,
        modalType,
        setModalName,
        setModalEmoji,
        handleSaveModal,
        closeListModal,
        closeWorkspaceModal,
    } = useTaskStore();

    const handleClose = () => {
        if(modalType === "List") closeListModal();
        if(modalType === "Workspace") closeWorkspaceModal();
    }

    const handleSave = () => {
        handleSaveModal(); //why not direct?
    }

    if(!isListModalOpen && !isWorkspaceModalOpen) return null;

    return(
        <div className="flex inset-0 fixed items-center justify-center bg-gray-900/75 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl transform transition-all">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {`Create New ${modalType}`}
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <input
                        type="text"
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                        placeholder={`Enter ${modalType} name`}
                        className="border border-gray-200 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />

                    <input
                        type="text"
                        value={modalEmoji}
                        onChange={(e) => setModalEmoji(e.target.value)}
                        placeholder={`Enter ${modalType} emoji`}
                        className="border border-gray-200 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />

                    <button
                        onClick={handleSave}
                        className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl w-full transition-colors duration-200 font-medium"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
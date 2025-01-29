
interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ( {isOpen, onClose}: ModalProps ) => {

    if(!isOpen) return null;

    return (
        <div
          className="fixed inset-0 flex justify-center items-center"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="bg-white p-[20px]">
            <h2>Modal Title</h2>
            <p>This is a modal content.</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );

}

export default Modal;
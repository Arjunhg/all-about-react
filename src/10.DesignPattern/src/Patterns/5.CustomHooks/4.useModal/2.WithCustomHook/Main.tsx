import Modal from "../1.WithoutCustomHook/Modal";
import useModal from "./hook/useModal";

const Main = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h1>My Amazing Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Main;
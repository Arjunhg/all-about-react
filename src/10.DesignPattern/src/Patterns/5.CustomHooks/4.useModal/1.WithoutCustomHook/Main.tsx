import { useState } from "react";
import Modal from "./Modal";

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <h1>Without Custom Hook</h1>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={closeModal} />
        </div>
    );
}

export default Main;
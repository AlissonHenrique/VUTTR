import ReactModal from "react-modal";
import { ReactNode, useEffect, useState } from "react";
interface PropsModal {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: () => void;
}

export function Modal({ children, isOpen, setIsOpen }: PropsModal) {
  const [modalStatus, setModalStatus] = useState(isOpen);
  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {children}
    </ReactModal>
  );
}

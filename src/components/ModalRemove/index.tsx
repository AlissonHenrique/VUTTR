import React from "react";
import { GrFormClose } from "react-icons/gr";
import Button from "../Button";
import { Modal } from "../Modal";

interface PropsModalRemove {
  isOpen: boolean;
  setIsOpenRemove: () => void;
  handleRemove: () => void;
}

export function ModalRemove({
  isOpen,
  setIsOpenRemove,
  handleRemove,
}: PropsModalRemove) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpenRemove}>
      <div className="header-modal">
        <h4>Remove tool</h4>
        <GrFormClose size={20} color="#8F8A9B" onClick={setIsOpenRemove} />
      </div>
      <p>
        Are you sutre you want to remove <b>hotel?</b>
      </p>
      <div className="content-buttons">
        <Button colorType="red-2" onClick={setIsOpenRemove}>
          Cancel
        </Button>
        <Button colorType="blue-2" onClick={handleRemove}>
          Yes, remove
        </Button>
      </div>
    </Modal>
  );
}

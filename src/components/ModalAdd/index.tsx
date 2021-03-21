import { GrFormClose } from "react-icons/gr";
import Button from "../Button";
import { Modal } from "../Modal";
import { useState } from "react";

interface PropsItems {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface PropsModalAdd {
  isOpen: boolean;
  setIsOpen: () => void;
  handleSubmit: (items: PropsItems) => void;
}

export function ModalAdd({ isOpen, setIsOpen, handleSubmit }: PropsModalAdd) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  function handleAddSubmit() {
    const data = {
      title,
      link,
      description,
      tags: tags.split(" ").map((tg) => tg.trim()),
    };

    handleSubmit(data);
    setIsOpen();
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="header-modal">
        <h4>Add new tool</h4>
        <GrFormClose size={20} color="#8F8A9B" onClick={setIsOpen} />
      </div>
      <div className="content-inpt">
        <label>Tool Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="content-inpt">
        <label>Tool Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="content-inpt">
        <label>Tool description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="content-inpt">
        <label>Tags</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="content-buttons">
        <Button colorType="blue-2" onClick={handleAddSubmit}>
          Add tool
        </Button>
      </div>
    </Modal>
  );
}

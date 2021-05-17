import { GrFormClose } from "react-icons/gr";
import Button from "../Button";
import { Modal } from "../Modal";
import { useCallback, useState } from "react";

import * as Yup from "yup";
import { toast } from "react-toastify";

interface PropsItems {
  id: number;
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

  const handleAddSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const schema = Yup.object().shape({
          title: Yup.string().required("Title is required"),
          link: Yup.string().required("Link is required"),
          description: Yup.string().required("Description is required"),
          tags: Yup.array().required("Tags is required"),
        });

        const data = {
          id: Math.floor(Math.random() * (1000 - 1)) + 1,
          title,
          link,
          description,
          tags: tags.split(" ").map((t: string) => `#${t} `),
        };

        await schema.validate(data, {
          abortEarly: false,
        });

        handleSubmit(data);
        setTitle("");
        setLink("");
        setDescription("");
        setTags("");
        setIsOpen();
        toast.success("Tool registred");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          // const errors = JSON.stringify(err.errors);
          for (let index in err.inner) {
            toast.error(err.inner[index].message);
          }
        }
      }
    },
    [handleSubmit, setIsOpen, title, link, description, tags]
  );
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="header-modal">
        <h4>Add new tool</h4>
        <GrFormClose size={20} color="#8F8A9B" onClick={setIsOpen} />
      </div>
      <form onSubmit={handleAddSubmit}>
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
          <Button type="submit" colorType="blue-2">
            Add tool
          </Button>
        </div>
      </form>
    </Modal>
  );
}

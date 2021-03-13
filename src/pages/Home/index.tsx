import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { Modal } from "./styles";
import api from "../../services/api";
import FormatTags from "../../util/formatTags";
//import "./styles.css";
import { GrFormClose } from "react-icons/gr";
import Button from "../../components/Button";
import { Container, Card } from "./styles";
interface Tools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenAdd, setIsOpenAdd] = useState(false);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const [list, setList] = useState<Tools[]>([]);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const [idRemove, setIdRemove] = useState<number>();

  useEffect(() => {
    async function loadList() {
      const response = await api.get("/tools");
      return setList(FormatTags(response.data));
    }
    loadList();
  }, []);
  const handleSearch = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const params = checkbox === false ? "?q=" : "?tags_like=";
        const response = await api.get(`tools${params}${search}`);

        setList(FormatTags(response.data));
      } catch (err) {
        console.log(err);
      }
    },
    [search, checkbox]
  );

  function handleCheckbox(value: boolean) {
    setCheckbox(value);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModalRemove(id: number) {
    setIsOpen(true);
    setIdRemove(id);
  }
  async function handleRemoveId() {
    await api.delete(`tools/${idRemove}`);
    setIsOpen(false);
  }
  function closeModalAdd() {
    setIsOpenAdd(false);
  }
  function openModalAdd() {
    setIsOpenAdd(true);
  }
  async function handleAddSubmit() {
    const data = {
      title,
      link,
      description,
      tags: tags.split(" ").map((tg) => tg.trim()),
    };
    await api.post("tools", data);
    setIsOpenAdd(false);
  }

  return (
    <>
      <Container>
        <h1>VUTTR</h1>
        <h4>Very useful Tools to Remenber</h4>

        <div className="box-search">
          <form className="box-inputs" onSubmit={handleSearch}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="container-checkbox">
              <input
                readOnly
                type="checkbox"
                checked={checkbox}
                onClick={() => handleCheckbox(!checkbox)}
              />
              <label>Search label in tags only</label>
            </div>
            <Button colorType="blue" onClick={openModalAdd}>
              Add
            </Button>
          </form>
        </div>
        {list.map((item) => (
          <Card key={item.id}>
            <div className="card-header">
              <a href={item.link} rel="noreferrer" target="_blank">
                {item.title}
              </a>
              <Button colorType="red" onClick={() => openModalRemove(item.id)}>
                Remove
              </Button>
            </div>
            <p>{item.description}</p>
            <span>{item.tags}</span>
          </Card>
        ))}
      </Container>
      {modalIsOpen && (
        <Modal>
          <div className="container-modal">
            <div className="header-modal">
              <h4>Remove tool</h4>
              <GrFormClose size={20} color="#8F8A9B" onClick={closeModal} />
            </div>
            <p>
              Are you sutre you want to remove <b>hotel?</b>
            </p>
            <div className="content-buttons">
              <Button colorType="red-2" onClick={closeModal}>
                Cancel
              </Button>
              <Button colorType="blue-2" onClick={handleRemoveId}>
                Yes, remove
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {modalIsOpenAdd && (
        <Modal>
          <div className="container-modal">
            <div className="header-modal">
              <h4>Add new tool</h4>
              <GrFormClose size={20} color="#8F8A9B" onClick={closeModalAdd} />
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
              <input
                type="text"
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
          </div>
        </Modal>
      )}
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { FormatTags } from "../../util/formatTags";

import Button from "../../components/Button";
import { Container } from "./styles";
import { Card } from "../../components/Card";
import { ModalAdd } from "../../components/ModalAdd";

import { ModalRemove } from "../../components/ModalRemove";
interface Tools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenRemove, setModalOpenRemove] = useState(false);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [tools, setTools] = useState<Tools[]>([]);
  const [removeId, setRemoveId] = useState<number>();

  useEffect(() => {
    async function loadTools() {
      const response = await api.get("/tools");
      return setTools(FormatTags(response.data));
    }
    loadTools();
  }, []);

  // useEffect(() => {
  //   const cb = checkbox === true ? "tags" : "title";
  //   const filter = list.filter((item) =>
  //     item.title.toLowerCase().includes(search.toLowerCase())
  //   );

  //   setListFilter(filter);
  // }, [list, search]);

  // async function handleAddSubmit() {
  //   const data = {
  //     title,
  //     link,
  //     description,
  //     tags: tags.split(" ").map((tg) => tg.trim()),
  //   };
  //   await api.post("tools", data);
  //   setTitle("");
  //   setLink("");
  //   setDescription("");
  //   setTags("");
  //   setIsOpenAdd(false);

  //   const response = await api.get("/tools");
  //   setList(FormatTags(response.data));
  // }

  async function handleSubmitAddModal(data: any) {
    try {
      const response = await api.post("tools", data);
      setTools([...tools, response.data]);
    } catch (err) {
      console.log(err);
    }
  }
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  function toggleModalRemove() {
    setModalOpenRemove(!modalOpenRemove);
  }
  function toggleModalRemoveID(id: number) {
    setModalOpenRemove(!modalOpenRemove);
    setRemoveId(id);
  }

  async function handleRemove() {
    await api.delete(`tools/${removeId}`);
    const filterTool = [...tools].filter((tool) => tool.id !== removeId);
    setTools(filterTool);
    setModalOpenRemove(!modalOpenRemove);
  }
  return (
    <>
      <Container>
        <h1>VUTTR</h1>
        <h4>Very useful Tools to Remenber</h4>
        <div className="box-search">
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
              onClick={() => setCheckbox(!checkbox)}
            />
            <label>Search label in tags only</label>
          </div>
          <Button colorType="blue" onClick={toggleModal}>
            Add
          </Button>
        </div>

        {tools.map((tool) => (
          <Card
            key={tool.id}
            tool={tool}
            handleOpenModalRemove={toggleModalRemoveID}
          />
        ))}
        <ModalAdd
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handleSubmit={handleSubmitAddModal}
        />
        <ModalRemove
          isOpen={modalOpenRemove}
          setIsOpenRemove={toggleModalRemove}
          handleRemove={handleRemove}
        />
      </Container>
    </>
  );
}

export default Home;

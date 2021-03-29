import { FormEvent, useEffect, useState } from "react";

import api from "../../services/api";

import Button from "../../components/Button";
import { Container, Form } from "./styles";
import { Card } from "../../components/Card";
import { ModalAdd } from "../../components/ModalAdd";

import { ModalRemove } from "../../components/ModalRemove";
import { toast } from "react-toastify";

interface Tools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenRemove, setModalOpenRemove] = useState(false);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [tools, setTools] = useState<Tools[]>([]);
  const [removeId, setRemoveId] = useState<number>();

  useEffect(() => {
    async function loadTools() {
      const response = await api.get("/tools");
      return setTools(response.data);
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

  async function handleSubmitAddModal(data: any) {
    try {
      await api.post("tools", data);
      setTools([...tools, data]);
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
    try {
      await api.delete(`tools/${removeId}`);
      const filterTool = [...tools].filter((tool) => tool.id !== removeId);
      setTools(filterTool);
      setModalOpenRemove(!modalOpenRemove);
      toast.success("Tool removed success");
    } catch {
      toast.error("Does not possible to remove");
    }
  }
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      if (!checkbox) {
        const response = await api.get(`/tools/?q=${search}`);
        setTools(response.data);
      } else {
        const response = await api.get(`/tools/?tags_like=${search}`);
        setSearch(response.data);
      }
    } catch {
      toast.error("Word not found");
    }
  }
  return (
    <>
      <Container>
        <h1>VUTTR</h1>
        <h4>Very useful Tools to Remenber</h4>
        <div className="box-search">
          <Form onSubmit={handleSubmit}>
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
          </Form>
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

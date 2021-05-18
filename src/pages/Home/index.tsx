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
      const response = await api.get<Tools[]>("/tools");
      const format = response.data.map((item: Tools) => ({
        ...item,
        tags: item.tags.map((t: string) => `#${t} `),
      }));

      return setTools(format);
    }
    loadTools();
  }, []);

  async function handleSubmitAddModal(data: Tools) {
    try {
      setTools([...tools, data]);
      await api.post("/tools", data);
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
      const filterTool = tools.filter((tool) => tool.id !== removeId);
      setTools(filterTool);
      await api.delete(`tools/${removeId}`);
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
        const format = response.data.map((item: Tools) => ({
          ...item,
          tags: item.tags.map((t: string) => `#${t} `),
        }));
        setTools(format);
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
          <Form onKeyUp={handleSubmit} data-testid="form">
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

        {tools.map((tool: Tools) => (
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

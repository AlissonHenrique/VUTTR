import React, { FormEvent, useCallback, useEffect, useState } from "react";
import ModalRemove from "../../components/ModalRemove";
import api from "../../services/api";
import FormatTags from "../../util/formatTags";
import "./styles.css";

interface Tools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

function Home() {
  const [list, setList] = useState<Tools[]>([]);
  const [checkbox, setCheckbox] = useState<any>(false);
  const [search, setSearch] = useState("");
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
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.type === "checkbox" ? e.target.checked : false;
    setCheckbox(value);
  }

  return (
    <>
      <div className="container">
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
                type="checkbox"
                checked={checkbox}
                onChange={(e) => handleCheckbox(e)}
              />
              <label>Search label in tags only</label>
            </div>
          </form>

          <button type="button"> Add</button>
        </div>
        {list.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-header">
              <a href={item.link} rel="noreferrer" target="_blank">
                {item.title}
              </a>
              <button type="button">Remove</button>
            </div>
            <p>{item.description}</p>
            <span>{item.tags}</span>
          </div>
        ))}
      </div>
      <ModalRemove />
    </>
  );
}

export default Home;

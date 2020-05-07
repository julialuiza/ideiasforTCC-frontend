import React, {useState} from "react";

import "./styles.css";

export default function IdeiaForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [areas, setAreas] = useState("");
  const [description, setDescription] = useState("");
  
  /*
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);*/

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({ title, description, areas});

    setTitle("");
    setDescription("");
    setAreas("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="title">Título do TCC / Ideia / Tema</label>
        <input
          name="title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="description">Descrição da ideia</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="areas">Áreas (separe por vírgula. Ex: artes, música..)</label>
        <input
          name="areas"
          id="areas"
          value={areas}
          onChange={e => setAreas(e.target.value)}
          required
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

import React, { useEffect, useState } from "react";
import api from "./services/api";
import IdeiaItem from "./components/IdeiaItem";
import IdeiaForm from "./components/IdeiaForm";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [ideias, setIdeias] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post("/ideias", data);

    setIdeias([...ideias, response.data]);
  }

  useEffect(() => {
    async function loadIdeias() {
      const response = await api.get("/ideias");
      setIdeias(response.data);
    }

    loadIdeias();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Enviar ideia 💡</strong>
        <IdeiaForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <div id="itens-title">
          <h1>Ideias for TCC ✌🏼</h1>
          <p><b>E cabe a você universitário ajudar outros universitários em fase de TCC ✍🏿</b></p>
          <p id="itens-desc">Colabore com o projeto deixando aqui aquelas ideias que você teve durante a produção do seu TCC e acabou não levando para frente, problemas para os quais você gostaria que pesquisas universitárias se dedicassem ou apenas um tema interessante (ex: Black Mirror, etc) que você acha que pode servir como inspiração para aqueles que ainda não conseguiram definir um tema de dissertação. </p>
        </div>
      
        <ul>
          {ideias.map(ideia => (
            <IdeiaItem key={ideia._id} ideia={ideia} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

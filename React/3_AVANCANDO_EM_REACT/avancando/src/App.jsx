import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionRender from "./components/ConditionRender";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "João";
  const [userName] = useState("Maria");

  return (
    <div>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets (imagem tratada com uma variável, ideal para quando a imagem é usada em outras partes do projeto) */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionRender />
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;

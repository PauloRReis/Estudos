import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Paulo");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "5px solid red" }}>
        Este elemento foi estilizado de forma Inline
      </p>
      {/* Inline CSS Dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinamico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinamico
      </h2>
      <h2
        style={
          name === "Paulo" ? { color: "black", backgroundColor: "green" } : null
        }
      >
        CSS dinamico
      </h2>
      {/* Classe dinamicas*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">testando</h2>
    </div>
  );
}

export default App;

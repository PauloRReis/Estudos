import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, marca: "Porsche", cor: "Preto" },
    { id: 2, marca: "Ford", cor: "Vermelho" },
    { id: 3, marca: "Nissan", cor: "Branco" },
  ];

  return (
    <div>
      <h1>Lista de Carros</h1>
      <CarDetails cars={cars} />
    </div>
  );
}

export default App;

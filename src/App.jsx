import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado/Listado";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Listado colaboradores={colaboradores} />
    </>
  );
}

export default App;

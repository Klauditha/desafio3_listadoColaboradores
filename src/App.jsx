import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado/Listado";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const eliminarColaborador = (id) => {
    console.log("Eliminando", id);
    const listaEliminada = colaboradores.filter(x => x.id !== id)
    setColaboradores(listaEliminada)
  }
  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </>
  );
}

export default App;

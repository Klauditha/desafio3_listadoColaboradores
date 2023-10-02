import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import Alert from "./components/Alert/Alert";

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
      <Alert mensaje="Colaborador eliminado" color="success" />
      <Alert mensaje="Colaborador eliminado" color="danger" />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import Alert from "./components/Alert/Alert";
import Buscador from "./components/Buscador/Buscador";
import Formulario from "./components/Formulario/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const eliminarColaborador = (id) => {
    console.log("Eliminando", id);
    const listaEliminada = colaboradores.filter(x => x.id !== id)
    setColaboradores(listaEliminada)
  }
  return (

    <>

      <div className="container m-3 p-3">
        <h1>Lista de Colaboradores</h1>

        <div className="row">
          <Buscador />
        </div>
        <div className="row">
          <div className="col">
            <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
          </div>
          <div className="col">
            <h2>Agregar colaborador</h2>
            <Formulario />
            <div className="row">
              <Alert mensaje="Colaborador eliminado" color="success" />
              <Alert mensaje="Colaborador eliminado" color="danger" />
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import Alert from "./components/Alert/Alert";
import Buscador from "./components/Buscador/Buscador";
import Formulario from "./components/Formulario/Formulario";

const App = (props) => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ error: false, msg: "", color: "" });

  const eliminarColaborador = (id) => {
    console.log("Eliminando", id);
    const listaEliminada = colaboradores.filter(x => x.id !== id)
    setColaboradores(listaEliminada)
  }
  return (

    <>

      <div className="container mt-3 pt-3 p-2">
        <h1>Lista de Colaboradores</h1>

        <div className="row">
          <Buscador />
        </div>

        <div className="row">
          <div className="col-9">
            <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
          </div>
          <div className="col-3">
            <h4 className="mb-2 pb-2">Agregar colaborador</h4>
            <Formulario setAlerta={setAlerta} alerta={alerta} />
            <div className="row">
              {props.alerta.msg ? <Alert className="rounded-3" variant={props.alerta.color} mensaje={props.alerta.msg} /> : null}
              {/* <Alert mensaje="Colaborador eliminado" color="success" /> */}
              {/* <Alert mensaje="Colaborador eliminado" color="danger" /> */}
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;

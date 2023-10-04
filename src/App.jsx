import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import Alert from "./components/Alert/Alert";
import Buscador from "./components/Buscador/Buscador";
import Formulario from "./components/Formulario/Formulario";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ error: false, msg: "", color: "" });
  const [busqueda, setBusqueda] = useState("");

  const eliminarColaborador = (colaborador) => {
    console.log("Eliminando", colaborador);
    const listaEliminada = colaboradores.filter(
      (x) =>
        x.nombre !== colaborador.nombre &&
        x.correo !== colaborador.correo &&
        x.edad !== colaborador.edad &&
        x.telefono !== colaborador.telefono &&
        x.cargo !== colaborador.cargo
    );
    setColaboradores(listaEliminada);
  };
  return (
    <>
      <div className="container mt-3 pt-3 p-2">
        <h1>Lista de Colaboradores</h1>

        <div className="row">
          <Buscador buscarColaborador={setBusqueda} />
        </div>

        <div className="row grid">
          <div className="col-9">
            <Listado
              colaboradores={colaboradores}
              buscarColaborador={busqueda}
              eliminarColaborador={eliminarColaborador}
            />
          </div>
          <div className="col-3 grid">
            <h4 className="mb-2 pb-2">Agregar colaborador</h4>
            <Formulario
              colaboradores={colaboradores}
              setColaboradores={setColaboradores}
              setAlerta={setAlerta}
              alerta={alerta}
            />
            <div className="row">
              {alerta.error ? (
                <Alert msg={alerta.msg} color={alerta.color} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import TablaFila from "../TablaFila/TablaFila";
import "./Listado.css";

const Listado = ({ colaboradores, eliminarColaborador, buscarColaborador }) => {
  return (
    <div className="table table-bordered table-striped">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {colaboradores
            .filter((colaborador) =>
              Object.values(colaborador).some((valor) =>
                valor.toLowerCase().includes(buscarColaborador.toLowerCase())
              )
            )
            .map((colaborador) => (
              <TablaFila key={colaborador.id} colaborador={colaborador} eliminarColaborador={eliminarColaborador} />

            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
import TablaFila from "../TablaFila/TablaFila";
import "./Listado.css";
const Listado = ({ colaboradores }) => {
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <TablaFila key = {colaborador.id} colaborador={colaborador} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Listado;

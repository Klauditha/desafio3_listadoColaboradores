
const TablaFila = ({ colaborador, eliminarColaborador }) => {
  return (
    <>
      <tr>
        <th>{colaborador.nombre}</th>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>

        <td><button className="bg-danger rounded-4 text-light border-danger" onClick={() => eliminarColaborador(colaborador.id)}>Eliminar</button></td>
      </tr>
    </>
  );
};

export default TablaFila;

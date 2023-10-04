
const TablaFila = ({ colaborador, eliminarColaborador }) => {
  return (
    <>
      <tr>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>

        <td><button className="bg-danger rounded-4 text-light border-danger" onClick={() => eliminarColaborador(colaborador)}>Eliminar</button></td>
      </tr>
    </>
  );
};

export default TablaFila;

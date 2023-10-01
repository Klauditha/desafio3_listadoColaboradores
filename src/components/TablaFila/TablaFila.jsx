const TablaFila = ({ colaborador }) => {
  return (
    <>
      <tr>
        <th>{colaborador.nombre}</th>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>
      </tr>
    </>
  );
};

export default TablaFila;

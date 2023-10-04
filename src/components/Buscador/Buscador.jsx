const Buscador = ({ buscarColaborador }) => {
  const handleChange = (e) => {
    buscarColaborador(e.target.value);
  };

  return (
    <form role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Busca un colaborador"
        aria-label="Search"
        onChange={handleChange}
      />
    </form>
  );
};

export default Buscador;



const Buscador = ({ buscarColaborador }) => {
    const handleChange = (e) => {
        buscarColaborador(e.target.value);
    };



    return (
        <form className="d-flex m-2 p-2 w-50" role="search">
            <input className="form-control me-2" type="search" placeholder="Busca un colaborador" aria-label="Search"
                onChange={handleChange} />
        </form>
    )
}

export default Buscador
import { useState } from "react";

const Formulario = ({ colaboradores, setColaboradores, setAlerta }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");

    const obtenerId = () => {
        return colaboradores.length + 1;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
            setAlerta({
                error: true,
                msg: "Completa todos los campos !",
                color: "danger",
            });
        } else {
            setAlerta({
                error: true,
                msg: "Colaborador agregado !",
                color: "success",
            });
            setNombre("");
            setCorreo("");
            setEdad("");
            setCargo("");
            setTelefono("");
            //const colaborador = { id:obtenerId, nombre, correo, edad, cargo, telefono };
            const colaborador = { nombre, correo, edad, cargo, telefono };
            setColaboradores([...colaboradores, colaborador])
        }
    }

    return (

        <form className="mb-2 pb-2" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre del colaborador" value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email del colaborador" value={correo}
                    onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" placeholder="Edad del colaborador" value={edad}
                    onChange={(e) => setEdad(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Cargo del colaborador" value={cargo}
                    onChange={(e) => setCargo(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" placeholder="Teléfono del colaborador" value={telefono}
                    onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Agregar colaborador</button>
        </form>
    )
}

export default Formulario
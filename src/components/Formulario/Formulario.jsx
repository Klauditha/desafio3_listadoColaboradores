import { useState } from "react";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");

    return (

        <form>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nombre del colaborador" value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email del colaborador" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Edad del colaborador" value={edad}
                    onChange={(e) => setEdad(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Cargo del colaborador" value={cargo}
                    onChange={(e) => setCargo(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Teléfono del colaborador" value={telefono}
                    onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Agregar colaborador</button>
        </form>
    )
}

export default Formulario
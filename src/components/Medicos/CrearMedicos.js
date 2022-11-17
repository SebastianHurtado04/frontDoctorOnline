import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//const URI = "http://localhost:9000/api/medicos/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/medicos/'


const CompCrearMedicos = () =>{
    const [ nombre, setNombre] = useState('');
    const [ identificacion, setIdentificacion] = useState('');
    const [ especialidad, setEspecialidad] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ consultorio, setConsultorio] = useState('');
    const navigate = useNavigate();

    // Función Guardar 

    const guardarM = async (g) =>{
        g.preventDefault(); // para guardar lo siguiente 


        await axios.post(URI, { nombre:nombre, identificacion:identificacion, especialidad:especialidad, telefono:telefono, correo:correo, consultorio:consultorio});
        navigate('/medicos');

    }
    return (
        <div className='container'>
            <h2>Modulo Crear Medicos</h2>
            <form onSubmit={ guardarM }>
                <div className="mb-3">

                    <input placeholder="Nombre del Médico" value={ nombre } onChange={ (g) => setNombre(g.target.value)} type="text" className="fomr-control"></input>
                </div>

                <div className="mb-3">

                    <input placeholder="Identificación" value={ identificacion } onChange={ (g) => setIdentificacion(g.target.value)} type="text" className="fomr-control"></input>
                </div>

                <div className="mb-3">

                    <input placeholder="Especialidad" type="text" value={ especialidad } onChange={ (g) => setEspecialidad(g.target.value)}  className="fomr-control"></input>
                </div>

                <div className="mb-3">

                    <input placeholder="Telefono" minLength={10} value={ telefono } onChange={ (g) => setTelefono(g.target.value)} type="tel" className="fomr-control"></input>
                </div>

                <div className="mb-3">

                    <input placeholder="Correo" value={ correo } onChange={ (g) => setCorreo(g.target.value)} type="email" className="fomr-control"></input>
                </div>

                <div className="mb-3">

                    <input placeholder="Consultorio" value={ consultorio } onChange={ (g) => setConsultorio(g.target.value)} type="number" className="fomr-control"></input>
                </div>

                <button type="submit" className="btn btn-primary">Guardar Médico</button>
            </form>
        </div>

    )

}

export default CompCrearMedicos;

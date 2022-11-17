import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import medicina from '../medicina.jpg'




//const URI = "http://localhost:9000/api/pacientes/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/pacientes/'

const CompMostrarPaciente = () => {
    const [pacientes, setPaciente] = useState([])
    useEffect(() => {
        getPacientes()
    }, [])

    // vamos a mostrar todos los Médicos
    const getPacientes = async () => {
        const res = await axios.get(URI)
        setPaciente(res.data);
}

    // Eliminar medicos
    async function deletepaciente(id) {
        await axios.delete(`${URI}${id}`)
        getPacientes()
    }
    return (
        <body>
        <header className="App-header">
                <nav>
                    <img id="img1" src={medicina} alt="header.jpg" />
                    <ul>
                        <li><Link to="/home"><i class="fa-solid fa-house"></i>Home</Link></li>
                    </ul>
                </nav>
            </header>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/pacientes/crear" className='btn btn-primary'> <i class="fa-solid fa-square-plus"></i> Nuevo Paciente </Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th> Nombre </th>
                                <th> No. de Identificación </th>
                                <th> Teléfono </th>
                                <th> E-Mail</th>
                                <th> E P S </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            { pacientes.map ( (paciente, index) => (
                                <tr key={ index }>
                                    <td> {paciente.nombre_paciente}</td>
                                    <td> {paciente.cedula}</td>
                                    <td> {paciente.telefono}</td>
                                    <td> {paciente.correo}</td>
                                    <td> {paciente.eps}</td>
                                    <td>
                                        <Link to= {`/pacientes/editar/${paciente._id}`} className='btn btn-primary btn-sm mt-2 mb-2'> <i className="fa-solid fa-pen-to-square"></i></Link>{"  "}
                                        <button onClick={() => deletepaciente(paciente._id)} className='btn btn-danger btn-sm mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </body>
    )
}

export default CompMostrarPaciente;

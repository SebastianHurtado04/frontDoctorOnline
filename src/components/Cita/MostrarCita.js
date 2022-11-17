import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import medicina from '../medicina.jpg'



//const URI = 'http://localhost:9000/api/citas/'
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/citas/'


const CompMostrarCita = () => {
    const [citas, setCita] = useState([])
    useEffect(() => {
        getCitas()
    }, [])

    // vamos a mostrar todas las citas
    const getCitas = async () => {
        const res = await axios.get(URI)
        setCita(res.data);
}

    // Eliminar citas
    async function deleteCitas(id) {
        await axios.delete(`${URI}${id}`)
        getCitas()
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
                    <Link to="/citas/crear" className="btn btn-primary"><i class="fa-solid fa-square-plus"></i>  Agendar Cita </Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th> Paciente </th>
                                <th> Tipo de Cita </th>
                                <th> Médico </th>
                                <th> Consultorio </th>
                                <th> Fecha de la Cita</th>
                                <th> Hora de la Cita </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            { citas.map ( (cita, index) => (
                                <tr key={ index }>
                                    <td> {cita.nombre}</td>
                                    <td> {cita.tipocita}</td>
                                    <td> {cita.medico}</td>
                                    <td> {cita.consultorio}</td>
                                    <td> {cita.fecha}</td>
                                    <td> {cita.hora}</td>
                                    <td>
                                        <Link to= {`/citas/editar/${cita._id}`} className='btn btn-primary btn-sm mt-2 mb-2'> <i className="fa-solid fa-pen-to-square"></i></Link>{"  "}
                                        <button onClick={() => deleteCitas(cita._id)} className='btn btn-danger btn-sm mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
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

export default CompMostrarCita;

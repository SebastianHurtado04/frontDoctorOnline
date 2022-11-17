import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import medicina from '../medicina.jpg'



//const URI = "http://localhost:9000/api/medicos/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/medicos/'

const CompMostrarMedicos = () =>{
    const [medicos, setMedicos] = useState([]);
    useEffect(  () =>{
        getMedicos()
    },[])

    // vamos a listar medicos

    const getMedicos = async () =>{
        const res = await axios.get(URI)
        setMedicos(res.data);
    }

    // eliminar medicos

    const deleteMedicos = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getMedicos()
        alert("Se ha eliminado el medico",medicos.id)
    }

    return(
        <body>
        <header className="App-header">
                <nav>
                    <img id="img1" src={medicina} alt="header.jpg" />
                    <ul>
                        <li><Link to="/home"><i class="fa-solid fa-house"></i>Home</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/medicos/crear" className="btn btn-primary"><i class="fa-solid fa-square-plus"></i>   Crear Medico</Link>
                        <table className="table">
                            <thead className="tableTheadBg">
                                <tr>
                                    <th> Nombre de Medico </th>
                                    <th> N° de Identificacion </th>
                                    <th> Especialidad </th>
                                    <th> Telefono </th>
                                    <th> Correo </th>
                                    <th> Consultorio </th>
                                </tr>
                            </thead>
                            <tbody>
                                { medicos.map( (medico, index) => (
                                    <tr key={ index }>
                                        <td> {medico.nombre} </td>
                                        <td> {medico.identificacion} </td>
                                        <td> {medico.especialidad} </td>
                                        <td> {medico.telefono} </td>
                                        <td> {medico.correo} </td>
                                        <td> {medico.consultorio} </td>
                                        <td>
                                            <Link to={`/medicos/editar/${medico._id}`} className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i></Link> {"  "}

                                            <button onClick={ () => deleteMedicos(medico._id) } className="btn btn-danger" ><i className="fa-regular fa-trash-can"></i></button>
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
export default CompMostrarMedicos;
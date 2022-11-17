import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import medicina from '../medicina.jpg'




//const URI = "http://localhost:9000/api/usuarios/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/usuarios/'

const CompMostrarUsuario = () => {
    const [usuarios, setUsuario] = useState([])
    useEffect(() => {
        getUsuarios()
    }, [])

    // vamos a mostrar todos los Usuarios
    const getUsuarios = async () => {
        const res = await axios.get(URI)
        setUsuario(res.data);
}

    // Eliminar Usuarios
    async function deleteusuario(id) {
        await axios.delete(`${URI}${id}`)
        getUsuarios()
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
                    <Link to="/usuarios/crear" className='btn btn-primary'> <i class="fa-solid fa-square-plus"></i> Crear Usuario </Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th> Nombre </th>
                                <th> Correo Electrónico </th>
                                <th> Clave </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            { usuarios.map ( (usuario, index) => (
                                <tr key={ index }>
                                    <td> {usuario.nombre}</td>
                                    <td> {usuario.correo}</td>
                                    <td> {usuario.password}</td>
                                    <td>
                                        <Link to= {`/usuarios/editar/${usuario._id}`} className='btn btn-primary btn-sm mt-2 mb-2'> <i className="fa-solid fa-pen-to-square"></i></Link>{"  "}
                                        <button onClick={() => deleteusuario(usuario._id)} className='btn btn-danger btn-sm mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
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

export default CompMostrarUsuario;

import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//const URI = "http://localhost:9000/api/usuarios/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/usuarios/'

const CompCrearUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    // Funcion Guardar
    const GuardarC = async (g) => {

        g.preventDefault();
        await axios.post(URI, { nombre: nombre, correo: correo, password: password });
        navigate('/usuario');

    }
    return (
        <div className='container'>
            <h2>Módulo Crear Usuarios</h2>
            <form onSubmit = {GuardarC}>

                <div className='mb-3'>
                    <label className='forma-label'>Nombre del Usuario</label>
                    <input value={nombre} onChange={(g) => setNombre(g.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                <label className='forma-label'>Correo Electrónico</label>
                    <input value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type="email" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>Clave</label>
                    <input value={password} onChange={(g) => setPassword(g.target.value)}
                        type="text" className='form-control' /></div>

                <button type='submit' className='btn btn-primary'>Crear Usuario</button>
            </form>
        </div>
    )
}

export default CompCrearUsuario;

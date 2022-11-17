import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




//const URI = "http://localhost:9000/api/usuarios/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/usuarios/'

const CompEditarUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Función actualizar

    const Update = async (g) => {
        g.preventDefault();
        await axios.put(`${URI}${id}`, {
            nombre: nombre, correo: correo, password: password
        });
        navigate('/usuarios');
    }
    useEffect( () => {
        getUsuarioById()
        // eslint-disable-next-line
    }, [])

    const getUsuarioById = async () => {
        const res = await axios.get(`${URI}${id}`)
            setNombre(res.data.nombre);
            setCorreo(res.data.correo);
            setPassword(res.data.password);
    }
    return (
        <div className='container'>
            <h2>Módulo Actualizar Usuarios</h2>
            <form onSubmit={Update}>

                <div className='mb-3'>
                    <label className='forma-label'>Paciente</label>
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
                <button type='submit' className='btn btn-primary'>Actualizar Usuario</button>
            </form>
        </div>
    )

}
export default CompEditarUsuario;
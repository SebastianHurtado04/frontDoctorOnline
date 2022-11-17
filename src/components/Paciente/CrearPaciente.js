import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//const URI = "http://localhost:9000/api/pacientes/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/pacientes/'

const CompCrearPaciente = () => {

    const [nombre_paciente, setNombre_Paciente] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [eps, setEps] = useState('');
    const navigate = useNavigate();


    // Funcion Guardar
    const GuardarC = async (g) => {

        g.preventDefault();
        await axios.post(URI, { nombre_paciente: nombre_paciente, cedula: cedula, telefono: telefono, correo: correo, eps: eps });
        navigate('/pacientes');

    }
    return (
        <div className='container'>
            <h2>Módulo Crear Pacientes</h2>
            <form onSubmit = {GuardarC}>

                <div className='mb-3'>
                    <label className='forma-label'>Nombre del Paciente</label>
                    <input value={nombre_paciente} onChange={(g) => setNombre_Paciente(g.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                <label className='forma-label'>No. de Identificación</label>
                    <input value={cedula} onChange={(g) => setCedula(g.target.value)}
                        type="text" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>Teléfono</label>
                    <input value={telefono} onChange={(g) => setTelefono(g.target.value)}
                        type="tel" className='form-control' minLength={10} /></div>

                <div className='mb-3'>
                <label className='forma-label'>Correo Electrónico</label>
                    <input value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type="email" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>E P S</label>
                    <input value={eps} onChange={(g) => setEps(g.target.value)}
                        type="text" className='form-control' /></div>

                <button type='submit' className='btn btn-primary'>Crear Paciente</button>
            </form>
        </div>
    )
}

export default CompCrearPaciente;

import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//const URI = 'http://localhost:9000/api/citas/'
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/citas/'

const CompCrearCitas = () => {

    const [nombre, setNombre] = useState('');
    const [tipocita, setTipoCita] = useState('');
    const [medico, setMedico] = useState('');
    const [consultorio, setConsultorio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const navigate = useNavigate();


    // Funcion Guardar
    const GuardarC = async (g) => {

        g.preventDefault();
        await axios.post(URI, { nombre: nombre, tipocita: tipocita, medico: medico, consultorio: consultorio, fecha: fecha, hora: hora });
        navigate('/citas');
    }
    return (
        <div className='container'>
            <h2>Módulo Crear Citas</h2>
            <form onSubmit={GuardarC}>

                <div className='mb-3'>
                    <label className='forma-label'>Paciente</label>
                    <input value={nombre} onChange={(g) => setNombre(g.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                <label className='forma-label'>Tipo de Cita</label>
                    <input value={tipocita} onChange={(g) => setTipoCita(g.target.value)}
                        type="text" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>Médico</label>
                    <input value={medico} onChange={(g) => setMedico(g.target.value)}
                        type="text" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>Consultorio</label>
                    <input value={consultorio} onChange={(g) => setConsultorio(g.target.value)}
                        type="number" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>Fecha de la Cita</label>
                    <input value={fecha} onChange={(g) => setFecha(g.target.value)}
                        type="date" className='form-control' /></div>

                <div className='mb-3'>
                <label className='forma-label'>Hora de la Cita</label>
                    <input value={hora} onChange={(g) => setHora(g.target.value)}
                        type="time" className='form-control' /></div>

                <button type='submit' className='btn btn-primary'>Crear Cita</button>
            </form>
        </div>
    )
}
export default CompCrearCitas;
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




//const URI = "http://localhost:9000/api/pacientes/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/pacientes/'

const CompEditarPaciente = () => {

    const [nombre_paciente, setNombre_paciente] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [eps, setEps] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Función actualizar

    const Update = async (g) => {
        g.preventDefault();
        await axios.put(`${URI}${id}`, {
            nombre_paciente: nombre_paciente, cedula: cedula, telefono: telefono, correo: correo, eps: eps
        });
        navigate('/pacientes');
    }
    useEffect( () => {
        getMedicoById()
        // eslint-disable-next-line
    }, [])

    const getMedicoById = async () => {
        const res = await axios.get(`${URI}${id}`)
            setNombre_paciente(res.data.nombre_paciente);
            setCedula(res.data.cedula);
            setTelefono(res.data.telefono);
            setCorreo(res.data.correo);
            setEps(res.data.eps);
    }
    return (
        <div className='container'>
            <h2>Módulo Actualizar Pacientes</h2>
            <form onSubmit={Update}>

                <div className='mb-3'>
                    <label className='forma-label'>Paciente</label>
                    <input value={nombre_paciente} onChange={(g) => setNombre_paciente(g.target.value)}
                        type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='forma-label'>No. de Cédula</label>
                    <input value={cedula} onChange={(g) => setCedula(g.target.value)}
                        type="text" className='form-control' /></div>

                <div className='mb-3'>
                    <label className='forma-label'>Teléfono</label>
                    <input value={telefono} onChange={(g) => setTelefono(g.target.value)}
                        type="tel" className='form-control' minLength={10} /></div>

                <div className='mb-3'>
                    <label className='forma-label'>E - Mail</label>
                    <input value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type="email" className='form-control' /></div>

                <div className='mb-3'>
                    <label className='forma-label'>E P S</label>
                    <input value={eps} onChange={(g) => setEps(g.target.value)}
                        type="text" className='form-control' /></div>
                <button type='submit' className='btn btn-primary'>Actualizar Paciente</button>
            </form>
        </div>
    )

}
export default CompEditarPaciente;
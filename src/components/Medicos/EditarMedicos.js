import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



//const URI = "http://localhost:9000/api/medicos/"
const URI = 'https://backend-doctoronline-u7-05.herokuapp.com/api/medicos/'

const CompEditarMedicos = () =>{
    const [ nombre, setNombre] = useState('');
    const [ identificacion, setIdentificacion] = useState('');
    const [ especialidad, setEspecialidad] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ consultorio, setConsultorio] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // funcion Actualizar medicos

    const Update = async (g) =>{
        g.preventDefault(); // para guardar lo siguiente 


        await axios.put(`${URI}${id}`, { nombre:nombre, identificacion:identificacion, especialidad:especialidad, telefono:telefono, correo:correo, consultorio:consultorio});
        navigate('/medicos');

    }
    useEffect( () =>{
        getMedicoById()
        // eslint-disable-next-line
    },[])

        const getMedicoById = async () =>{
            const res = await axios.get(`${URI}${id}`)

            setNombre(res.data.nombre);
            setIdentificacion(res.data.identificacion);
            setEspecialidad(res.data.especialidad);
            setTelefono(res.data.telefono);
            setCorreo(res.data.correo);
            setConsultorio(res.data.consultorio);
            
        }

        return (
            <div className='container'>

                <h2>Modulo Editar Medicos</h2>
                <form onSubmit={ Update }>

                    <div className="mb-3">
                        <label className="fomr-label">Nombre del Medico:   </label>
                        <input value={ nombre } onChange={ (g) => setNombre(g.target.value)} type="text" className="fomr-control"></input>
                    </div>
    
                    <div className="mb-3">
                        <label className="fomr-label">Identificación:  </label>
                        <input value={ identificacion } onChange={ (g) => setIdentificacion(g.target.value)} type="text" className="fomr-control"></input>
                    </div>
    
                    <div className="mb-3">
                        <label className="fomr-label">Especialidad:    </label>
                        <input type="text" value={ especialidad } onChange={ (g) => setEspecialidad(g.target.value)}  className="fomr-control"></input>
                    </div>
    
                    <div className="mb-3">
                        <label className="fomr-label">Telefono:   </label>
                        <input value={ telefono } onChange={ (g) => setTelefono(g.target.value)} type="tel" minLength={10} className="fomr-control"></input>
                    </div>
    
                    <div className="mb-3">
                        <label className="fomr-label">Correo:    </label>
                        <input value={ correo } onChange={ (g) => setCorreo(g.target.value)} type="email" className="fomr-control"></input>
                    </div>
    
                    <div className="mb-3">
                        <label className="fomr-label">Consultorio:   </label>
                        <input value={ consultorio } onChange={ (g) => setConsultorio(g.target.value)} type="number" className="fomr-control"></input>
                    </div>
    
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
    
        )


}
export default CompEditarMedicos;

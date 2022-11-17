import './styleLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import APIInvoke from '../Utils/APIInvoke';
import swal from 'sweetalert';



const CompRegistrar = () =>{
    const navigate = useNavigate();

     const [usuario, setUsuario] = useState({
        nombre:'',
        correo:'',
        password:'',
        confirmar:''
    });

    const { nombre, correo, password, confirmar } = usuario;

    const save = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])


    const crearCuenta = async () =>{

        if ( password !== confirmar){
            const msg = "Las contraseñas son diferentes";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text:'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            })
        }else {
            const data = {
                        nombre: usuario.nombre,
                        correo: usuario.correo,
                        password: usuario.password
                    }

            const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
            const msg = "El usuario fue registrado correctamente.";
            
            swal({
                title: 'Información!',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text:'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

            navigate('/')
            

        }
    }


    const load = (e) =>{
        e.preventDefault();
        crearCuenta();
        
    } 
    
    return(
        
        <div className="wrapper fadeInDown">

            <div id="formContent">
                {/* <!-- Tabs Titles --> */}
                <h2 className="active"> Registrate </h2>

                {/* <!-- Login Form --> */}
                <form onSubmit={load}>
                    <input type="text" id="nombre" className="fadeIn second" name="nombre" placeholder="Nombre Completo"  value={nombre} onChange={save}  required />

                    <input type="email" id="login" className="fadeIn second" name="correo" placeholder="Carreo Electronico" value={correo} onChange={save} required />

                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Contraseña"  value={password} onChange={save}  min='6' required/>

                    <input type="password" id="password" className="fadeIn third" name="confirmar" placeholder="Confirme su Contraseña"  value={confirmar} onChange={save} required/>

                    <input type="submit" className="fadeIn fourth" value="Registrar" />

                    <Link to={"/"} className="underlineHover"> <i class="fa-solid fa-left"></i>Volver a Login</Link>


                </form>
            </div>
        </div>
            
    )
}

export default CompRegistrar
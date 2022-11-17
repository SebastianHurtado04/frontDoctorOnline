import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styleLogin.css';
import swal from 'sweetalert';
import React from 'react';
import APIInvoke from '../Utils/APIInvoke';






const CompLogin = () => {
 
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        correo: '',
        password: ''
    });

    const { correo, password } = usuario;

     const save = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    } 

    useEffect(() => {
        document.getElementById("correo").focus();
    }, [])


    const iniciarSesion = async () => {
        if (password.length < 6) {
            const msg = "La contraseña debe tener al menos 6 caracteres.";

            swal({
                title: 'Error!',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            const data = {
                correo: usuario.correo,
                password: usuario.password
            }

            const response = await APIInvoke.invokePOST(`/api/auth`, data);
            const mensaje = response.msg;

            if ( mensaje === 'El usuario no existe' || mensaje === 'Constraseña incorrecta' ) {
                const msg = " No es posible iniciar sesion, verifique los datos ingresados. ";

                swal({
                    title: 'Error!',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'OK',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                const msg = " Ha iniciado sesion correctamente ¡BIENVENIDO! ";

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
                // obtener el token
                const jwt = response.token;

                // guardar el token
                localStorage.setItem('token', jwt);

                // redireccionar 

                navigate('/home')

            }
        }

        }
        const load = (e) => {
            e.preventDefault();
            iniciarSesion();
        } 

        return (

            <div className="wrapper fadeInDown">
                <div>
                    <h1>Bienvenido a Tu Doctor Online, Inicia sesion para ingresar</h1>
                </div>
                <div id="formContent">
                    
                    {/* <!-- Tabs Titles --> */}
                    <h2 className="active"> Iniciar Sesion </h2>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={load} >

                        <input type="email" id="correo" className="fadeIn second" name="correo" placeholder="Carreo Electronico" value={ correo } onChange={ save }  required />

                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="Contraseña"  value={ password } onChange={save}  required />

                        <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" />

                        <Link to={"/registrar"} className="underlineHover" ><i class="fa-solid fa-user-plus"></i> Registrate  </Link>
                    </form>
                </div>
            </div>

        )
    }

    export default CompLogin
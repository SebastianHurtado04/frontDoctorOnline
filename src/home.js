 import logo from './logo.png';
import medicos from './medicos.avif';
import './style.css';
import medicina from './components/medicina.jpg';
import { Link } from "react-router-dom";



const CompHome = () => {
    return (
        

        <body>
            <header className="App-header">
                <nav>
                    <img id="img1" src={medicina} alt="header.jpg" />
                    <ul>
                        <li><Link to="/home"><i class="fa-solid fa-house"></i>Home</Link></li>
                        <li><Link to="/medicos">Medicos</Link> </li>
                        <li><Link to="/citas">Citas</Link> </li>
                        <li><Link to="/pacientes">Pacientes</Link> </li>
                        <li><Link to="/usuarios">Usuarios</Link> </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="principal">

                    <h2 className="tituloPrincipal">Sobre Nosotros</h2>

                    <img className="medicina" src={logo} alt="Logo de medicina" />

                    <p> El objetivo principal de la <strong> Clinica Tu Doctor Online </strong> es  informar, motivar y ayudar a la población a adoptar y mantener prácticas y estilos de vida saludables, asi como propugnar los cambios ambientales necesarios para facilitar lo anteriormente dicho y dirigir la formación profesional y la investigación hacia esos mismos objetivos. </p>

                    <p id="mision"> <em> Nuestra misión es : <strong> " Contribuir en la generación de bienestar social de nuestros afiliados, con un modelo de aseguramiento basado en la gestión de riesgo en salud, con criterios de calidad, sentido humano, enfoque preventivo e incluyente, generando confianza y eficiencia." </strong>.</em> </p>

                    <p> Nuestros profesionales son experimentados y están constantemente observando los cambios y movimiento en el
                        mundo de la medicina, para asi ofrecer a nuestros clientes/pacientes el mejor servicio medico. </p>

                </section>

                <section className="mapa">
                    <h3 className="tituloPrincipal">Nuestra Ubicación</h3>
                    <p>Estamos ubicados en la Cl. 18 Nte. # 5 - 34, Cali, Valle del Cauca</p>
                    <div className="mapaContenido">
                        <iframe width="100%" height="330" id="gmap_canvas" src="https://maps.google.com/maps?q=Cl.%2018%20Nte.%20Cali,%20Valle%20del%20Cauca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


                    </div>

                </section>

                <section className="diferenciales">
                    <h3 className="tituloPrincipal">Diferenciales</h3>

                    <div className="contenidoDiferenciales">

                        <ul className="listaDiferenciales">
                            <li className="items">Atención personalizada a los clientes</li>
                            <li className="items">Agendamiento de citas Online</li>
                            <li className="items">Profesionales calificados</li>
                            <li className="items">Opción de citas Online</li>

                        </ul><img src={medicos} className="imgDiferenciales" />
                    </div>

                </section>
            </main >

        </body >
    )

}

export default CompHome;